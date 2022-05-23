<ul style={{ listStyle: 'none' }}>
{fila.map ( fila => (
    <li key={fila.linkid}  className='row' style={{marginBottom:'5%'}}>
      <Col xs={1}>
      <text  style={{ fontSize: 25, backgroundColor: 'white', borderRadius: '110%',marginRight:5,paddingLeft:5,paddingRight:5,color:'black'}} >{fila.position}ª</text>
      </Col>
      <Col style={{ backgroundColor: '#074A08', color: 'black', borderRadius: 8, marginLeft: 25}}>
      <text style={{ fontSize: 20, color: 'white' }}>{fila.src}</text>
      <h4 style={{ color: 'white' }}>{fila.queue}</h4>
      <h4 style={{ color: 'white' }}>{fmtMSS(fila.wait)}</h4>
      </Col>
                </li>
            ))}
</ul>