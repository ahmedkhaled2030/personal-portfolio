import React from 'react'
import Header from './components/Header/Header'
import css from './styles/App.module.scss'
const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={` bg-primary ${css.container}`}>
      <Header />
</div>
  )
}
// false =>  false && -100%
export default App