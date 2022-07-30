import { BsFilm } from 'react-icons/bs'
import {
  GiHighPunch,
  GiVoodooDoll,
  GiMissileSwarm,
  GiDramaMasks,
  GiMagicBroom,
  GiThrownKnife,
  GiMusicalNotes,
  GiDualityMask,
  GiLovers,
  GiSpaceship,
  GiBoltBomb,
  GiWesternHat,
  GiDevilMask,
} from 'react-icons/gi'
import { AiOutlineCompass, AiOutlineVideoCameraAdd, AiOutlineStar } from 'react-icons/ai'
import {
  MdOutlineTheaterComedy,
  MdOutlineFamilyRestroom,
  MdOutlineHistory,
  MdOpenInNew,
} from 'react-icons/md'
import { CgScreen } from 'react-icons/cg'

const categories = [
  { label: 'Popular', value: 'popular', Icon: BsFilm },
  { label: 'Top Rated', value: 'top_rated', Icon: AiOutlineStar },
  { label: 'Upcoming', value: 'upcoming', Icon: MdOpenInNew },
]

export const GenresIcons = {
  Action: GiHighPunch,
  Adventure: AiOutlineCompass,
  Animation: GiVoodooDoll,
  Comedy: MdOutlineTheaterComedy,
  Crime: GiMissileSwarm,
  Documentary: AiOutlineVideoCameraAdd,
  Drama: GiDramaMasks,
  Fantasy: GiMagicBroom,
  Family: MdOutlineFamilyRestroom,
  History: MdOutlineHistory,
  Horror: GiThrownKnife,
  Music: GiMusicalNotes,
  Mystery: GiDualityMask,
  Romance: GiLovers,
  'Science Fiction': GiSpaceship,
  'TV Movie': CgScreen,
  Thriller: GiDevilMask,
  War: GiBoltBomb,
  Western: GiWesternHat,
}

export type GenresKeys = keyof typeof GenresIcons

export default categories
