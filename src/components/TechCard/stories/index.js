import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TechCard from '../';

const longText = `Aqui é Body Builder Ipsum PORRA! Birl!
Ó o homem ali porra!, é 13 porra! Ele tá olhando pra gente. É 37 anos caralho! Vai subir árvore é o caralho porra! Aqui nóis constrói fibra, não é água com músculo.
Bora caralho, você quer ver essa porra velho. É verão o ano todo vem cumpadi. Vamo monstro! Negativa Bambam negativa. Boraaa, Hora do Show Porra. É esse que a gente quer, é ele que nóis vamo buscar.
Ó o homem ali porra!, é 13 porra! Sabe o que é isso daí? Trapézio descendente é o nome disso aí. É nóis caraio é trapezera buscando caraio! Não vai dá não. Bora caralho, você quer ver essa porra velho. Aqui é bodybuilder porra!
Bora caralho, você quer ver essa porra velho. Vo derrubar tudo essas árvore do parque ibirapuera. Sabe o que é isso daí? Trapézio descendente é o nome disso aí. É verão o ano todo vem cumpadi. É 13 porra! Não vai dá não.
Sai filho da puta! É esse que a gente quer, é ele que nóis vamo buscar. É 13 porra! Eita porra!, tá saindo da jaula o monstro! Eu quero esse 13 daqui a pouquinho aí. É verão o ano todo vem cumpadi.`

storiesOf('Technology Card', module)
  .add('draft tech', () => (
    <TechCard
      style={{width: 300}}
      _id={'abc'}
      status={'draft'}
      shortDescription={'this is a short description'}
      description={'this is a long description'}
      techId={'0023'}
      name={'Drone Delivery'}
      attachmentsCount={12}
      projectsCount={23}
      organizationsCount={12}
      image={'http://www.placehold.it/300x200'}
      highlight={''}
      hideMenuItems={false}
      deleteAlertOpen={false}
    />
  ))
  .add('review tech', () => (
    <TechCard
      style={{width: 300}}
      _id={'abc'}
      status={'review'}
      shortDescription={'this is a short description'}
      description={'this is a long description'}
      techId={'0023'}
      name={'Drone Delivery'}
      attachmentsCount={12}
      projectsCount={23}
      organizationsCount={12}
      image={'http://www.placehold.it/300x200'}
      highlight={''}
      hideMenuItems={false}
      deleteAlertOpen={false}
    />
  ))
  .add('published tech', () => (
    <TechCard
      style={{width: 300}}
      _id={'abc'}
      status={'published'}
      shortDescription={'this is a short description'}
      description={'this is a long description'}
      techId={'0023'}
      name={'Drone Delivery'}
      attachmentsCount={12}
      projectsCount={23}
      organizationsCount={12}
      image={'http://www.placehold.it/300x200'}
      highlight={''}
      hideMenuItems={false}
      deleteAlertOpen={false}
    />
  ))

  .add('highlighted', () => (
    <TechCard
      style={{width: 300}}
      _id={'abc'}
      status={'draft'}
      shortDescription={'this is a short description for drone delivery'}
      description={'this is a long description'}
      techId={'0023'}
      name={'Drone Delivery'}
      attachmentsCount={12}
      projectsCount={23}
      organizationsCount={12}
      image={'http://www.placehold.it/300x200'}
      highlight={'Drone Deli'}
      hideMenuItems={false}
      deleteAlertOpen={false}
      onConfirmDelete={() => console.log('Confirm delete!')}
    />
  ))
  .add('hidden menu items', () => (
    <TechCard
      style={{width: 300}}
      _id={'abc'}
      status={'draft'}
      shortDescription={'this is a short description'}
      description={'this is a long description'}
      techId={'0023'}
      name={'Drone Delivery'}
      attachmentsCount={12}
      projectsCount={23}
      organizationsCount={12}
      image={'http://www.placehold.it/300x200'}
      highlight={''}
      hideMenuItems={true}
      deleteAlertOpen={false}
      onConfirmDelete={() => console.log('Confirm delete!')}
    />
  ))
  .add('very long description', () => (
    <TechCard
      style={{width: 300}}
      _id={'abc'}
      status={'draft'}
      shortDescription={longText}
      description={'this is a long description'}
      techId={'0023'}
      name={'Drone Delivery'}
      attachmentsCount={12}
      projectsCount={23}
      organizationsCount={12}
      image={'http://www.placehold.it/300x200'}
      highlight={''}
      hideMenuItems={true}
      deleteAlertOpen={false}
      onConfirmDelete={() => console.log('Confirm delete!')}
    />
  ))
  .add('no description', () => (
      <TechCard
        style={{width: 300}}
        _id={'abc'}
        status={'draft'}
        shortDescription={''}
        description={'this is a long description'}
        techId={'0023'}
        name={'Drone Delivery'}
        attachmentsCount={12}
        projectsCount={23}
        organizationsCount={12}
        image={'http://www.placehold.it/300x200'}
        highlight={''}
        hideMenuItems={true}
        deleteAlertOpen={false}
        onConfirmDelete={() => console.log('Confirm delete!')}
    />
  ))
  .add('no relations', () => (
      <TechCard
        style={{width: 300}}
        _id={'abc'}
        status={'draft'}
        shortDescription={''}
        description={'this is a long description'}
        techId={'0023'}
        name={'Drone Delivery'}
        attachmentsCount={0}
        projectsCount={0}
        organizationsCount={0}
        image={'http://www.placehold.it/300x200'}
        highlight={''}
        hideMenuItems={true}
        deleteAlertOpen={false}
        onConfirmDelete={() => console.log('Confirm delete!')}
    />
  ))
