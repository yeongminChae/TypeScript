// OOP

type Nickname = string
type Friends = Array<string>
type Health = 1 | 5 | 10
type Team = "red" | "blue" | "yellow"

// type Player = { type keyword can be used in many perposes , basically i can do everything with type
//   nickname: Nickname,
//   health: Health
//   team:Team
// }
interface Player { // to specitfy the shape of the objects to explain to typescripts. it works a lot with typescripts
  nickname: Nickname,
  health: Health
  team:Team
}
const nico: Player = {
  nickname:"nico",
  health: 10,
  team:"red"
}

type Food = string;

const kimchi:Food = "delicious" 

// type VS interface

// interface

interface interUser {
  name:string
}
interface ProInterPlayer extends interUser {}
const nicole : ProInterPlayer = {
  name:"nico"
}

// type

type typeUser = {
  name:string
}
type ProTypePlayer = typeUser & {}
const nicolas : ProTypePlayer = {
  name:"nico"
}

// We can only use interface for explain the shape of object to typescript -> it is more close with OOP , we can stacks many different properties
// We can create any sort of types , types is more flexible