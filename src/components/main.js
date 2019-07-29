import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import bgImage from '../images/film-tapes.jpg';

const useStyles = makeStyles(() => ({
  bgImage: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    color: '#fff',
    backgroundPosition: '50%',
    backgroundSize: 'cover',
    backgroundImage: `url(${bgImage})`,
  },
  titleContainer: {
    position: 'relative',
  },
  titleWrapper: {
    minHeight: '400px',
    display: 'flex;',
    alignItems: 'center',
  },
  title: {
    zIndex: '10',
    fontSize: '48px',
    lineHeight: '1.2',
    textShadow: '0 0 6.5px rgba(4,5,16,.592)',
    color: '#fefefe',
  },
  historySection: {
    background: '#FFF0F5',
  },
  historyContent: {
    paddingTop: '80px',
  },
  historyParagraph: {
    textIndent: '1.5em',
    textAlign: 'justify',
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <>
      <section className={classes.historySection}>
        <div className={classes.titleContainer}>
          <div className={classes.bgImage} />
          <Container fixed>
            <div className={classes.titleWrapper}>
              <h2 className={classes.title}>История становления белорусского кинематографа</h2>
            </div>
          </Container>
        </div>
        <Container fixed>
          <div className={classes.historyContent}>
            <p className={classes.historyParagraph}>
              Белорусскому кинематографу без малого 90 лет. История национального кино берет начало от
              черно-белого немого фильма «Лесная быль», который сняли в 1926 году в Ленинграде, так как
              в то время производственная база «Белгоскино» отсутствовала. В столицу Беларуси киностудия
              переехала в 1939 году. Еще через 9 лет она получила нынешнее название –
               <a target="_blank" href="http://www.belarusfilm.by" rel="noopener">«Беларусьфильм»</a>
              .
            </p>
            <p className={classes.historyParagraph}>
              Расцвет белорусского кинематографа пришелся на 1950–60-е годы. В то время были созданы картины,
              которые до сих пор с удовольствием пересматривают зрители на всем постсоветском пространстве:
              «Константин Заслонов», «Часы остановились в полночь», «Девочка ищет отца», «Я родом из детства»,
              «Альпийская баллада», «Город мастеров» и др.
            </p>
            <p className={classes.historyParagraph}>
              Фильмы, снятые по сценариям белорусских писателей, всегда пользовались большим успехом у киноманов.
              «Люди на болоте», «Дыхание грозы» по дилогии И. Мележа, «Знак беды» и «Альпийская баллада» по повестям В.
              Быкова, «Дикая охота короля Стаха» по роману В. Короткевича, «Иди и смотри» по повести А. Адамовича –
              эти картины входят в золотой фонд белорусского кино.
            </p>
            <p className={classes.historyParagraph}>
              Художественный фильм «Люди на болоте» (режиссер В. Туров), снятый по одноименному роману Ивана Мележа,
              среди прочих призов имеет и приз жюри актерскому ансамблю фильма на XXIII МКФ в Карловых Варах (ЧССР, 1982).
              Социальная драма о наркоманах «Под небом голубым» (реж. В. Дудин) в 1990 году на 47-м Международном
              кинофестивале в Венеции (Италия) собрал сразу несколько почетных наград: призы от киноклубов Италии,
              итальянских критиков и приз зрительских симпатий. А военная драма классика отечественного кино режиссера
              Виктора Турова «Через кладбище» в 1994 году решением ЮНЕСКО была внесена в список 100 лучших фильмов мира.
            </p>
            <p className={classes.historyParagraph}>
              За последние годы наградами различных кинофестивалей были награждены созданные в Беларуси фильмы
              «Анастасия Слуцкая», «Поводырь», «Дунечка», «В августе 44-го», «Брестская крепость». В этом году фильм
              «В тумане» (С. Лозницы), который критики окрестили как «экзистенциальная драма на партизанском материале»,
              получил приз международной федерации кинокритики FIPRESCI на 65-м Международном кинофестивале в Каннах (Франция).
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Main;
