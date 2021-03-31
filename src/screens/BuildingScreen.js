import React from 'react'
import Header from '../components/Header'
import Map from '../components/Map'
import FloorItem from '../components/FloorItem'

const BuildingScreen = () => {
  return (
    <div className="building-screen">
      <Header>
        Факультет комп’ютерних наук та кібернетики
      </Header>

      <span className="sf-text">Оберіть поверх</span>

      <div className="sf-block">
        <Map className="sf-map"/>
        <div className="sf-floors-list">
          <FloorItem
            floorNum={5}
            floorText="Тут знаходяться не дуже важливі кімнати, такі як комори, кабінети, комп’ютери."
          />

          <FloorItem
            floorNum={4}
            floorText="Цей поверх призначено більше для студентів, ніж викладачів. Тут можна знайти буфет, їдальну та навіть декілька спальних кімнат."
          />

          <FloorItem
            floorNum={3}
            floorText="Найважливіший поверх для навчання студентів. Саме тут ви можете побачити більшість кабінетів з технікою, людей, відповідальних за неї тощо."
          />

          <FloorItem
            floorNum={2}
            floorText="Адміністративний поверх факультету, тут знаходяться обидва деканати, кабінет декана, всіма улюблена Читалка, звичайна бібліотека та проходи на інші факультети."
          />

          <FloorItem
            floorNum={1}
            floorText="Великий хол для різних подій та виставок, роздягальня, баки для сортування сміття, навчальні кабінети, канцелярні товари та кафе."
          />
        </div>
      </div>
    </div>
  )
}

export default BuildingScreen;