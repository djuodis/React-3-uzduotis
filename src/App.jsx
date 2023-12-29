import { Header } from "./components/Header"
import { Main } from "./components/Main"
import './App.css'

const headerInfo = [
  { title: "Title",
    subTitle: "Some about text", 
    descriptor: "in two lines" }
]

const mainInfo = [
  {
    title: "Portfolio",
    subTitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima ullam fugit dicta, voluptates odit voluptatum veritatis optio fugiat officia magni. Ullam aliquam dolores dolore animi, numquam quasi distinctio fugiat explicabo?",
    images: "/src/images/women.jpg",
    descriptor:"Ipsum Feuzgiat"
    
  }
]

const App = () => {
  return (
    <>
          {headerInfo.map((info, index) => (
            <Header
              title={info.title}
              subTitle={info.subTitle}
              descriptor={info.descriptor}
              key={index}
            />
          ))}

      <main>
        <div className="container">
          {mainInfo.map((info, index) => (
            <Main
              title={info.title}
              subTitle={info.subTitle}
              imagePath={info.images} 
              descriptor={info.descriptor} 
              key={index}
              />
          ))}
        </div>
      </main>
    </>
  )
}

export default App
