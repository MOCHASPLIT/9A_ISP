# Práctica 3

## Diagrama Entidad-Relación
![Diagrama Entidad-Relación](./img/diagrama.png)
En esta sección, presentamos el diagrama entidad-relación que sirve como la representación visual de la estructura de datos que utilizamos en nuestro proyecto.

## Instrucciones
1. **Aplicar servicio REST (aplicar por lo menos 2 métodos del CRUD) basado en la entidad transaccional asignada en su trabajo autónomo.**
    
    ![I1img1](./img/I1img1.png)

    ![I1img2](./img/I1img2.png)

2. **Aplicar por lo menos una prueba unitaria para los métodos del servicio REST.**
    
    ![I2img1](./img/I2img1.png)

    ![I2img2](./img/I2img2.png)

    ![I2img3](./img/I2img3.png)

3. **Definir un TAG que permita dockerizar tanto el servicio REST como sus pruebas en un solo stage (se aplica compilación normal de la imágen).**

    **NOTA:** Como se acordo en clases se omitio el punto 3 y se hizo directamente el punto 4 donde se observan 4 stages en un dockerfile, con la modificacion que en el run del test solo se coloca la entidad que se representa.

4. **Crear otro TAG que permita llevar multistage con por lo menos 3 etapas sobre el mismo servicio REST.**
    
    ![I4img1](./img/I4img1.png)
    ```bash
    docker build --target test -t nestjstest .
    ```
    ![I4img2](./img/I4img2.png)

5. **Subir ambos TAGs a Docker Hub como versiones de la misma imagen.**
    
    ![I5img1](./img/I5img1.png)
    ```bash
    docker image tag nestjstest mochasplit/isp_practice03:test
    ```
    ```bash
    docker push mochasplit/isp_practice03:test
    ```
    ![I5img2](./img/I5img2.png)
    ```bash
    docker build --tag mochasplit/isp_practice03:nestjsserver .
    ```
    ```bash
    docker push mochasplit/isp_practice03:nestjsserver
    ```
    ![I5img3](./img/I5img3.png)

6. **Probar localmente la descarga y funcionamiento de dicha imagen publicada con anterioridad.**
    ```bash
    docker container run mochasplit/isp_practice03:nestjsserver
    ```
    ![I6img1](./img/I6img1.png)

    ![I6img2](./img/I6img2.png)

7. **Aplicar patrón AAA en el desarrollo de sus pruebas.**
    
    ![I7img1](./img/I7img1.png)