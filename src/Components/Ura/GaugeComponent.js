import React from "react";
import GaugeComponent from "react-gauge-component";

// Função para formatar o valor
const valueFormat = (value) => {
  return `${value} %`;
};

// Componente do Gauge
const GaugeChart = ({ width, height, min, mid, max, aftermax, value }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      
      {/* Contêiner do Gauge */}
      <div style={{ width: `${width * 0.2}px`, height: `${height * 0.2}px`, 
        marginTop: `-${height * 0.0003}px`,  }}>
        <GaugeComponent
          type="semicircle"
          arc={{
            width: width * 0.00015,
            padding: 0,
            cornerRadius: 1,
            subArcs: [
              { limit: min, color: "#84BB4C", showTick: true },
              { limit: mid, color: "#84BB4C", showTick: true }, 
              { limit: max, color: "#F9CF48", showTick: true }, 
              { limit: aftermax, color: "#ED6E6E", showTick: true}, 
            ],
          }}
          pointer={{type: "arrow", elastic: true}}
          labels={{
            valueLabel: {
              style: { fontSize: '40px', fontWeight: "bold", transform: `translateY(${height * 0.00000}px)`, fill: '#5A5A5A', strokeWidth: 0 },
              formatTextValue: valueFormat,
            },
            tickLabels: {
              type: "outer",
              ticks: [
                { value: min },
                { value: mid },
                { value: max },
                { value: aftermax },
              ],
              defaultTickValueConfig: {
                formatTextValue: valueFormat,
                style: { fontSize: height * 0.02 },
              },
            },
          }}
          value={value}
          minValue={min}
          maxValue={aftermax}
        />
      </div>

      {/* Título do gráfico */}
      <div style={{ 
        fontSize: height * 0.02, 
        fontWeight: "bold", 
        color: "#5A5A5A", 
        marginTop: `-${height * 0.015}px`, 
        textAlign: "center"
      }}>
        Cancelamentos
      </div>
    </div>
  );
};

export default GaugeChart;
