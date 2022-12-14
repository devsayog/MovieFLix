type Genre = {
  id: number
  name: string
}

interface Genres {
  genres: Genre[]
}

type MovieType = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
interface MoviesType {
  page: number
  results: MovieType[]
  total_pages: number
  total_results: number
}

type MovieDescriptionType = {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: {
    id: number
    name: string
    poster_path: string
    backdrop_path: string
  }
  budget: number
  genres: {
    id: number
    name: string
  }[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: {
    id: number
    logo_path: string | null
    name: string
    origin_country: string
  }[]
  production_countries: {
    iso_3166_1: string
    name: string
  }[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: {
    english_name: string
    iso_639_1: string
    name: string
  }[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  videos: {
    results: {
      iso_639_1: string
      iso_3166_1: string
      name: string
      key: string
      site: string
      size: number
      type: string
      official: boolean
      published_at: string
      id: string
    }[]
  }
  credits: {
    cast: {
      adult: boolean
      gender: number
      id: number
      known_for_department: string
      name: string
      original_name: string
      popularity: number
      profile_path: string
      cast_id: number
      character: string
      credit_id: string
      order: number
    }[]
    crew: {
      adult: boolean
      gender: number
      id: number
      known_for_department: string
      name: string
      original_name: string
      popularity: number
      profile_path: string
      credit_id: string
      department: string
      job: string
    }[]
  }
}

type ActorDetailsType = {
  adult: boolean
  also_known_as: string[]
  biography: string
  birthday: string
  deathday: null
  gender: number
  homepage: null
  id: number
  imdb_id: string
  known_for_department: string
  name: string
  place_of_birth: string
  popularity: number
  profile_path: string
}

export type { Genres, Genre, MovieType, MoviesType, MovieDescriptionType, ActorDetailsType }

// export default {}
