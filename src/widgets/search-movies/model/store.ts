import { requestSearchMoviesByName, Movie } from 'src/shared/lib/api/requests/movies';
import { makeAutoObservable } from 'mobx';





class Store {
    movie:Movie | null = null;
    isFoundMovie = false;
    isLoading = false;
    errorMessage = '';
    searchValue = '';
    isError = false;
    inputError='';
    constructor() {
        makeAutoObservable(this);
    }
    async loadMovies(){
        const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        if(this.searchValue.match(regExp)){
            console.log(this.searchValue);
            this.isLoading = true;
            try {
                const result = await requestSearchMoviesByName(this.searchValue);
                if(result.Response === 'False'){
                    this.movie = null;
                    this.isFoundMovie = true;
                }
                // The API does not return a 404 if the movie is not found.
                // @ts-ignore
                this.movie = result;
            }catch (e){
                this.isError = true;
                this.errorMessage = 'Error ';
            }
            finally {
                this.isLoading = false;
            }
        }else{
            this.setInputError('Error Text');
        }

    }
    setSearchValue(value:string){
        this.searchValue = value;
    }
    setInputError(error:string){
        this.inputError = error;
    }
}
export const  moviesStore = new Store();