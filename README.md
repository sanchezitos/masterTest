# master Test BackEnd

Prueba de backend donde se consume el API de GitHub para listar el top 10 de los repositorios más populares del usuario "google".

## Tecnologías Utilizadas

- **Node.js**
- **TypeScript**
- **Serverless Framework**
- **GitHub API**
- **Axios**

## Configuración

1. Clona el repositorio:
    ```sh
    git clone https://github.com/sanchezitos/masterTest.git
    cd masterTest
    ```

2. Instala las dependencias:
    ```sh
    npm install
    ```

## Uso

### Local

Para probar el proyecto localmente ejecuta:
```sh
serverless offline --noTimeout
```

### Despliegue

Para desplegar la aplicación usando Serverless Framework, ejecuta:
```sh
serverless deploy --stage
```
