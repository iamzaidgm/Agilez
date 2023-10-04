# Proyecto reto I: Desarrollar un manejador de proyectos

## Getting Started

The content of this repository is the initial section of the implementation of a project manager software based on the scrum methodology containing the following:

* Class diagram that covers all requested requirements

* All the necessary routes for the project to work based on the REST model and the class diagram

* Interaction diagram that explains the flow according to the requirements.

* Docker image 


### Prerequisites

    *node js 
    *npm 
    *docker

### Installing

1.Clone this repository:

    git clone git@gitlab.com:a348503/agilez.git

2.Install the dependencies by running the following command:

    npm install


3.Start the server 

    npm start

4.In a browser enter the following url address:

    http://localhost:3000



### To run it from a docker image

1.Download the docker image:

    docker pull iamzaidgm/agilez

2.Run the container:

    docker run -p 80:80 agilez


## Built With

* node js
* npm
* express

## Diagrams 

Classes Diagram
![Classes Diagram](./Diagramas/AGILEZ_CLASES.jpg)

* Link:
https://drive.google.com/file/d/1RcyUPcFcGBGd8ZW8pzSbsu7FcxpWls4N/view?usp=sharing 

Interaction Diagrams

* Create Project
![Create Project](./Diagramas/1crear_proyecto.jpg)

* Assigning members to a project
![Create Project](./Diagramas/2AsignacionDeMiembros.jpg)

* Registrer
![Create Project](./Diagramas/3Registro.jpg)

* Add Skills
![Create Project](./Diagramas/4AñadirHabilidades.jpg)

* Edit Skills
![Create Project](./Diagramas/5EditarHabilidades.jpg)

* Log in
![Create Project](./Diagramas/6IniciarSesion.jpg)

* Add Cards
![Create Project](./Diagramas/7AñadirTarjetas.jpg)

* Delete Cards
![Create Project](./Diagramas/8EliminarTarjetas.jpg)

* Modify Cards
![Create Project](./Diagramas/9ModificarTarjetas.jpg)

* Move Cards 
![Create Project](./Diagramas/10mover_tarjetas.jpg)

* View graphs
![Create Project](./Diagramas/11VisualizarGraficas.jpg)

* Validate cards
![Create Project](./Diagramas/12validarTarjetas.jpg)

* Add review to release
![Create Project](./Diagramas/13revisar_release.jpg)

* Change project status
![Create Project](./Diagramas/14CambiarStatus.jpg)

## Authors

Anahí Peinado Villalobos 353262

Gilberto Contreras Conn 348503

Zaid Joel Gonzalez Mendoza 353254

## License

Does not have a license

## Acknowledgments
* I.S Luis Antonio Ramírez Martínez 
