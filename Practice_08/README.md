# Práctica 8

## Diagrama Entidad-Relación
![Diagrama Entidad-Relación](./img/diagrama.png)
En esta sección, presentamos el diagrama entidad-relación que sirve como la representación visual de la estructura de datos que utilizamos en nuestro proyecto.

## Deploy en Dockers aplicando Github Actions.

1. Crear repositorio público o privado (En el ejemplo se crea público para que todos tengan acceso al mismo).

   **URL:** https://github.com/MOCHASPLIT/9A_ISP_PRACTICE_08

   ![1](./img/1.png)

   **NOTA:** De presentar el código Fuente publicado en su repositorio omitir pasos 2 y 3.

2. Seguir los siguientes pasos para preparar su Código y así subirlo al repositorio.
   
   • ``Git init``

   • ``Git add .``

   • ``Git commit -m “Comentarios de este primer commit”``

3. Copiar los siguiente commandos a la terminal y ejecutar para así subir su Código al repositorio
   
   • ``git remote add origin https://github.com/[usuario]/[repositorio].git``
   
   • ``git branch -M main``
   
   • ``git push -u origin main``

4. Crear los Secrets Docker_User y Docker_Password en la Plataforma GITHUB

   ![2](./img/2.png)

5.  Utilizar su usuario y clave (token) de Docker Hub para llenar estos secrets

6. Crear Token en Docker (con el nombre Github-Actions) para que pueda ser utilizada en GitHub.

   ![3](./img/3.png)

   ![5](./img/5.png)

7. Copiar este Token generado en el Secret Docker_Password.

   ![4](./img/4.png)

8. Crear Action tipo Docker Image para que se genere el Workflow.

   ![6](./img/6.png)

9. Dockerizar nuestra aplicación (De preferencia Servicio REST o GraphQL sin dependencias).

   ![7](./img/7.png)

10. Adicionalmente debemos constatar que la imagen puede ser compilada con ``docker build -t [CuentaDockerHub]/isp_practice08:0.0.1 .`` y probar su funcionamiento.
   
      ![8](./img/8.png)
   **NOTA:** Podemos revisar las dependencias en el marketplace de Github para crear o modificar los pasos del archivo docker-image.yml.

11. Comprobación.
   
      ![9](./img/9.png)

      ![10](./img/10.png)

      ![11](./img/11.png)

      ![12](./img/12.png)
      
      ![12](./img/13.png)




