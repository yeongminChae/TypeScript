// OOP

type PlayerA = {
  name:string
}
type PlayerAA = PlayerA & {
  lastName:string
}
// type PlayerAA = { -> impossible
//   health:number
// } 
const playerA: PlayerAA = {
  name:"nico",
  lastName:"las"
}

interface PlayerB {
  name:string
}
interface PlayerBB extends PlayerB {
  lastName:string
}
interface PlayerBB {
  health:number
}
const playerB: PlayerBB = {
  name:"nico",
  lastName:"las",
  health:10
}
type typePlayerA = {
  firstname:string
}
interface interPlayerB {
  firstname:string
}

class typeUser implements typePlayerA{
  constructor(
    public firstname:string
  ){}
} 
class interUser implements interPlayerB{
  constructor(
    public firstname:string
  ){}
} 

// if u want to define the class's objects or shapes , u should use interface.
// except for this it's better to use type