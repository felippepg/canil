import data, { PetType, PetData } from '../helpers/data'

class Pet {
    findAll(): PetData[] {
        return data
    }

    findByType(type: PetType): PetData[] {
        return data.filter(item => item.type === type)
    }

    findByName(name: string): PetData[] {
        //indexOf recebe como parametro a String que eu gostaria de buscar
        return data.filter(item =>
            item.name.toLowerCase()
                .indexOf(name.toLowerCase()) > - 1)
    }

}

export default new Pet