import { Container, Table } from "reactstrap"

export const visualizarServico = () => {
    return (
        <div>
            <Container>
                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Serviço</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                </Table>
            </Container>
        </div>
    )
}