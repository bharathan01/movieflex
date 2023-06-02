import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

 
    
  transform(value:any,searchTerm:any ):any {
    if(searchTerm == null ){
      return value
    }
    return value.filter((search:any) =>{
  
        return JSON.stringify(search).trim().toLowerCase().includes(searchTerm.trim().toLowerCase())
     

    })
  }

}
