//import { Repository } from '../models/Repository';
import axiosInstance from './axiosInstance';

interface Repository {
  name: string;
  stargazers_count: number;
  [key: string]: any; // Para otros campos que puedan existir
}

const getAllRepositories = async (): Promise<Repository[]> => {
  let page = 1;
  const perPage = 100;
  let allRepositories: Repository[] = [];
  let fetchedRepositories: Repository[] = [];

  do {
    const response = await axiosInstance.get<Repository[]>(`/users/${process.env.DEFAULT_GITHUB_USER}/repos`, {
      params: {
        per_page: perPage,
        page,
      },
    });
    fetchedRepositories = response.data;
    allRepositories = allRepositories.concat(fetchedRepositories);
    page++;
  } while (fetchedRepositories.length === perPage);

  return allRepositories;
};

export const getPopularRepositories = async (): Promise<Repository[]> => {
  try {
    const repositories = await getAllRepositories();

    // Ordenamos los repositorios por el número de estrellas en orden descendente
    repositories.sort((a, b) => b.stargazers_count - a.stargazers_count);

    // Devolvemos los primeros 10 repositorios
    return repositories.slice(0, 10);
  } catch (error) {
    console.error(`Error fetching repositories: ${(error as Error).message}`);
    throw new Error(`Error fetching repositories: ${(error as Error).message}`);
  }
};


/* export async function getPopularRepositories(): Promise<void> {
    try {
        const response = await axiosInstance.get(`/users/${process.env.DEFAULT_GITHUB_USER}/repos`)

        const repositories = response.data;

        repositories.forEach((repo: { name: any; stargazers_count: any; }) => {
            console.log(`Name: ${repo.name}, Stars: ${repo.stargazers_count}`);
        });
        return repositories
    } catch (error) {
        console.error('Error fetching repositories:', (error as Error).message);
    }
} */


