import Header from "./components/Header"
import Section from "./components/Section"
import ListItem from "./components/ListItem"

{/*Estrura de Dados*/ }

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imgUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },


  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imgUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant",
  },
  {

    url: "https://www.twitch.tv/directory/game/Minecraft",
    imgUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft",
  },

  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imgUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT",
  },

]

const channelListData = [

  {
    url: "https://www.twitch.tv/maykbrito",
    imgUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Mayk Brito",
  },

  {
    url: "https://www.twitch.tv/alanzoka",
    imgUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-150x150.png",
    alt: "Imagem de Alanzoka",
  },

  {
    url: "https://www.twitch.tv/cellbit",
    imgUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/0595cdd0-65a7-4fa3-996d-323cf3a54be1-profile_image-70x70.png",
    alt: "Imagemd de Cellbit",
  },

]

const socialListData = [
  {
    url: "https://www.linkedin.com/in/aldevan7",
    imgUrl: "/public/assets/icons8-linkedin-circled.svg",
    alt: "Github de Aldevan",
  },
  {
    url: "https://www.github.com/Aldevan7",
    imgUrl: "/public/assets/github-icon-1.svg",
    alt: "Twitter",
  },
  {
    url: "https://www.instagram.com/aldevan7",
    imgUrl: "./assets/instagram.svg",
    alt: "Instagram",
  },
  {
    url: "https://twitter.com/Aldevan2609",
    imgUrl: "/public/assets/twitter.svg",
    alt: "Twitter",
  },
]

export function App() {
  return (
    
    <div className="App">

      <Header />

      <main>

        <Section
          title="Meus jogos"
          subtitle="Os games que eu mais curto jogar!"
          className="games-list"

        >

          {
            gamesListData.map(function (item) {
              return (
                <ListItem
                  url={item.url}
                  imgUrl={item.imgUrl}
                  alt={item.alt}
                />
              )
            })
          }
        </Section>

        <Section
          title="Canais e Stremares"
          subtitle="Lista de canais e transmissões que não perco!"
          className="channel-list"
        >

          {
            channelListData.map(function (item) {
              return (
                <ListItem
                  url={item.url}
                  imgUrl={item.imgUrl}
                  alt={item.alt}
                />
              )
            })
          }
        </Section>

        <Section
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo!"
          className="social-list"
        >
         {
          socialListData.map(function(item) {
            return(
              <ListItem
              url={item.url}
              imgUrl={item.imgUrl}
              alt={item.alt}              
            />
            )
          })
         }
        </Section>

      </main>
    </div>
  )
}