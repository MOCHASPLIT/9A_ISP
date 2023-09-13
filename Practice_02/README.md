# Práctica 2

## Instrucciones

1. <span style="color: green;">**Aplicar ejemplo codificado en carpeta NPM.**</span>

    - **Puede probar los dockers de manera aislada utilizando los comandos:**
    
        Construir la imagen Docker desde la carpeta NPM:
        ```bash
        docker build -t mynpm .
        ```
        ![I1img1](./img/I1img1.png)

        Iniciar un contenedor Docker interactivo y montar un directorio local en la carpeta de la aplicación:
        ```bash
        docker run -it -v [local folder]:/app mynpm init
        ```
        ![I1img2](./img/I1img2.png)

        Instalar el paquete Express en la aplicación dentro del contenedor:
        ```bash
        docker run -it -v [local folder]:/app mynpm install express --save
        ```
        ![I1img3](./img/I1img3.png)

    - **También puede realizar la prueba con el Docker Compose que expone los Dockers:**
    
        Inicializar la aplicación usando Docker Compose:
        ```bash
        docker-compose run npm init
        ```
        ![I1img4](./img/I1img4.png)

        Inicializar la aplicación y eliminar el contenedor después de la ejecución:
        ```bash
        docker-compose run --rm npm init
        ```
        ![I1img5](./img/I1img5.png)

        Instalar las dependencias de la aplicación utilizando Docker Compose:
        ```bash
        docker-compose run --rm npm install
        ```
        ![I1img6](./img/I1img6.png)

        Eliminar contenedores Docker no utilizados:
        ```bash
        docker container prune
        ```
        ![I1img7](./img/I1img7.png)

2. <span style="color: green;">**Probar ejemplo en carpeta Laravel.**</span>

    - **Puede considerar los siguientes pasos:**
    
        Con el docker compose definido puede crear un nuevo Proyecto en Laravel.
        ```bash
        docker-compose run --rm composer create-project --prefer-dist laravel/laravel .
        ```
        ![I2img1](./img/I2img1.png)

        Al levanter el docker compose podemos tener nuestro servidor de Laravel en el puerto 8000.
        ```bash
        docker-compose up -d --build server
         ```
        ![I2img2](./img/I2img2.png)
        ![I2img3](./img/I2img3.png)

        Ahora podremos aplicar la herramienta migrate base de datos utilizando artisan. Antes de ejecutar el commando debemos actualizar las variables de entorno:
        ![I2img4](./img/I2img4.png)
        ```bash
        docker-compose run --rm artisan migrate
        ```
        
        De este modo podríamos aplicar cuarquier método disponible en Artisan
        ```bash
        docker-compose run --rm artisan list
        ```
        ![I2img6](./img/I2img6.png)

        También Podemos utilizar NPM y sus comandos
        ```bash
        docker-compose run --rm npm version
        ```
        ![I2img7](./img/I2img7.png)
    
    - **Cambiar alguna vista y probar que el servidor replica los cambios revisando en el navegador.**
        
        Antes de la modificación
        ![I2img3](./img/I2img3.png)

        Después de la modificación
        ![I2img8](./img/I2img8.png)