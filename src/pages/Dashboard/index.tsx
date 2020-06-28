/* eslint-disable camelcase */
import React, { useEffect, useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import api from '../../service/api';

import { Container, Titutlo, Form, Repository, Error } from './styles';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState<Repository[]>(() => {
        const storageItens = localStorage.getItem(
            '@githubExplore:repositories',
        );

        if (storageItens) {
            return JSON.parse(storageItens);
        }
    });
    const [inputError, setInputError] = useState('');

    useEffect(() => {
        localStorage.setItem(
            '@githubExplore:repositories',
            JSON.stringify(repositorios),
        );
    }, [repositorios]);

    async function handleAddRepository(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        event.preventDefault();

        if (!newRepo) {
            setInputError('Digite o autor/nome do repositório');
            return;
        }

        try {
            const response = await api.get<Repository>(`/repos/${newRepo}`);

            setRepositorios([...repositorios, response.data]);
            setNewRepo('');
            setInputError('');
        } catch (err) {
            setInputError('Erro na busca por este repositório');
        }
    }

    return (
        <>
            <img src={logo} alt="logo" />
            <Titutlo>Explore repositórios do github!</Titutlo>
            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input
                    placeholder="Digite o nome do repo!"
                    type="text"
                    name=""
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    id=""
                />
                <button type="submit">Pesquisar</button>
            </Form>
            {inputError && <Error>{inputError}</Error>}
            <Repository>
                {repositorios.map((repositorio) => (
                    <Link
                        to={`/repository/${repositorio.full_name}`}
                        key={repositorio.full_name}
                    >
                        <img
                            src={repositorio.owner.avatar_url}
                            alt="avatar_url"
                        />
                        <div>
                            <strong>{repositorio.full_name}</strong>
                            <p>{repositorio.description}</p>
                        </div>

                        <FiChevronRight size={20} color="#cbcbd6" />
                    </Link>
                ))}
            </Repository>
        </>
    );
};

export default Dashboard;
