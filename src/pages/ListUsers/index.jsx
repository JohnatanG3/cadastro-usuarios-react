import DefaultButton from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import api from "../services/api";
import { useEffect, useState } from "react";
import Titles from "../../components/Title";
import { AvatarUser, CardUsers, Container, Containerusers, TrashIcon } from "./styles";
import Trash from "../../assets/trash.svg";
import { useNavigate } from "react-router-dom";

function ListUsers() {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
       async function getUsers() {
            const { data } = await api.get("/usuarios");
            setUsers(data);
       }

       getUsers();
    }, [])

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`);

        const updateUsers = users.filter(user => user.id !== id);
        setUsers(updateUsers);
    }

    return(
        <Container>
            <TopBackground />
            <Titles>Listagem de Usuários</Titles>
            <Containerusers>
                    {users.map(user => (
                        <CardUsers key={user.id}>
                            <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} alt="avatar-usuarios" />
                            <div>
                                <h3>{user.name}</h3>
                                <p>Idade: {user.age}</p>
                                <p>E-mail: {user.email}</p>
                            </div>
                            <TrashIcon src={Trash} alt="icone-lixo" onClick={() => deleteUsers(user.id)} />
                        </CardUsers>
                    ))}
            </Containerusers>
            <DefaultButton type="button" onClick={() => navigate("/")}>Voltar</DefaultButton>
        </Container>
    )
}

export default ListUsers;