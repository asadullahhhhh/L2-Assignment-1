type FormatValue = string | number | boolean

const formatValue = (param: FormatValue): FormatValue => {
    if(typeof param === "string"){
        return param.toUpperCase()
    }else if(typeof param === "number"){
        return param * 10
    }else{
        return !param 
    }
}





const getLength = (param: string | any[]): number => {
    if(typeof param === "string"){
        return param.length 
    }else if(Array.isArray(param)){
        return param.length
    }else{
        return 0
    }
}





class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name
        this.age = age 
    }

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`
    }
}





type Item = {
    title : string;
    rating : number;
}

const filterByRating = (param: Item[]): Item[] => {
    const upper4Star = param.filter(item => item.rating >= 4)
    return upper4Star
}





type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

const filterActiveUsers = (param: User[]): User[] => {
    return param.filter(item => item.isActive)
}





interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (param: Book): void => {
    console.log(`Title: ${param.title}, Author: ${param.author}, Published: ${param.publishedYear}, Available: ${param.isAvailable ? "Yes" : "No"}`)
}





type Unic = Array<string | number>

const getUniqueValues = (param1: Unic, param2: Unic ) => {

    const combindArr: Unic = [...param1, ...param2]
    const unicArr: Unic = []
    const unicObj: Record<string, boolean> = {}

    for(let i = 0; i < combindArr.length; i++){
        const stringKey = String(combindArr[i])

        if(!unicObj[stringKey]){
            unicObj[stringKey] = true
            unicArr.push(combindArr[i])
        }
    }

    return unicArr;

}