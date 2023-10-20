export interface Root {
    count: number
    next: any
    previous: any
    results: Pokemon[]
  }
  
  export interface Pokemon {
    name: string
    url: string
  }
  