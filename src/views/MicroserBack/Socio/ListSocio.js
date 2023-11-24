import React, {useEffect, useState} from "react"
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
import SocioService from "views/services/SocioService";
 //obtencion de datos del backend
function ListSocio() {
    const [socios, setSocios] =useState([]);
    useEffect(() => {
        SocioService.getAllSocio().then(response => {
            setSocios(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    },[])
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Lista</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Edad</th>
                      <th>Sexo</th>
                      <th>Dni</th>
                      <th>Numero</th>
                      <th>Correo</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        socios.map(
                            socio =>
                            <tr key={socio.id}>
                                <td>{socio.id}</td>
                                <td>{socio.nombre}</td>
                                <td>{socio.apellido}</td>
                                <td>{socio.edad}</td>
                                <td>{socio.sexo}</td>
                                <td>{socio.dni}</td>
                                <td>{socio.numero}</td>
                                <td>{socio.correo}</td>
                            </tr>

                        )
                    }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ListSocio;
