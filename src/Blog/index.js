import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Post from './Post';
import media from '../common/media';
import plane from './plane.png';
import dog from './dog.png';
import list from './list.png';

const Blog = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #f8fcff;

  @media screen and (min-width: ${media.sm}) {
    padding-top: 40px;
    padding-bottom: 60px;
  }
`;

const posts = [
  {
    titleIcon: plane,
    title: 'Как купить дешевые авиабилеты?',
    text: `Aviasales.ru — это метапоисковик авиабилетов. Мы ищем билеты на самолет
      по сотням авиакомпаний и находим за считанные минуты самые дешевые авиабилеты.
      Чтобы купить авиабилет дешево, воспользуйтесь нашим поиском, который совершенно
      бесплатно сравнивает цены на авиабилеты онлайн и находит самые дешевые перелеты.
      Больше нет смысла ходить в авиакассы, обзванивать агентства — дешевый билет
      находится на расстоянии клика. На нашем сайте вы можете подобрать дешевые
      билеты на самолет в Европу, Азию и на другие континенты. Мы написали для вас
      простую инструкцию о том, как пользоваться поиском и экономить на перелетах
      от 1000 до 20 000 руб в год.`,
  },
  {
    titleIcon: dog,
    title: 'Электронный билет',
    text: `Электронный авиабилет — это, по сути, обычный билет на самолет, но только
      в менее привычном для путешественника виде. Вся информация об авиаперелете
      (данные пассажира, маршрут следования) хранится в электронной базе, а пассажир
      получает на руки маршрут-квитанцию. Некоторые пассажиры, купив авиабилет онлайн
      и получив маршрут-квитанцию, удивлены ее видом — это обыкновенный лист формата А4,
      на котором распечатана вся информация о предстоящем перелете. Однако это
      действительно официальный документ, подтверждающий договор между авиаперевозчиком
      и пассажиром. При регистрации на рейс пассажир должен предъявить маршрут-квитанцию
      вместе с удостоверением личности точно так же, как предъявляют обыкновенный
      бумажный билет. Следует отметить, что электронный билет, приобретенный онлайн,
      стоит дешевле своего бумажного аналога.`,
  },
  {
    titleIcon: list,
    title: '20 советов авиапутешественникам',
    text: `Есть масса путеводителей по странам, но ни одного о том, как провести время
      в самолете. Для того, чтобы сделать ваш перелет максимально комфортным, мы
      написали 20 советов о подготовке к путешествию. Ведь настоящее путешествие
      начинается со слов «Добро пожаловать на борт нашего самолета»!"`,
  },
];

export default () => (
  <Blog>
    <Grid>
      <Row>
        {posts.map(post => (
          <Col xs={12} lgOffset={1} lg={10}>
            <Post title={post.title} titleIcon={post.titleIcon}>
              {post.text}
            </Post>
          </Col>
        ))}
      </Row>
    </Grid>
  </Blog>
);
