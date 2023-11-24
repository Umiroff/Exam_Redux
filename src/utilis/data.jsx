
import { uid } from 'uid';
import tovuqliDonar from '../assets/tovuqli donar.webp'
import pishloqliPitsa from '../assets/pishloqli.webp';
import goshtliMiks from '../assets/goshmiks.webp';
import donarPitsa from '../assets/donar.webp';
import superMiks from '../assets/supermiks.webp';
import pishloqliJoja from '../assets/pishloqjoja.webp';
import dablPep from '../assets/dablpep.webp';
import yurakPitsa from '../assets/yurakpissa.webp';

const productData = [
    {
        id: uid(),
        title: 'Tovuqli donar',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aspernatur, sapiente eum quo velit!',
        img: tovuqliDonar,
        price: 60000,
        amount: 1,
    },
    {
        id: uid(),
        title: 'Pishloqli pitsa',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aspernatur, sapiente eum quo velit!',
        img: pishloqliPitsa,
        price: 39000,
        amount: 1,
    },
    {
        id: uid(),
        title: "Go'shtli miks",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aspernatur, sapiente eum quo velit!',
        img: goshtliMiks,
        price: 90000,
        amount: 1,
    },
    {
        id: uid(),
        title: 'Donar Pitsa',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aspernatur, sapiente eum quo velit!',
        img: donarPitsa,
        price: 60000,
        amount: 1,
    },
    {
        id: uid(),
        title: 'Super Miks',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aspernatur, sapiente eum quo velit!',
        img: superMiks,
        price: 90000,
        amount: 1,
    },
    {
        id: uid(),
        title: 'Pishloqli joʻja',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aspernatur, sapiente eum quo velit!',
        img: pishloqliJoja,
        price: '90,000',
        amount: 1,
    },
    {
        id: uid(),
        title: 'Dabl pepperoni',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aspernatur, sapiente eum quo velit!',
        img: dablPep,
        price: '90,000',
        amount: 1,
    },
    {
        id: uid(),
        title: 'Yurak Pizza',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla sapiente incidunt explicabo culpa quibusdam voluptate.',
        img: yurakPitsa,
        price: '90,000',
        amount: 1,
    },
]

export default productData;