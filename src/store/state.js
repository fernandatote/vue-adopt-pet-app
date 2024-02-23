import cats from '@/data/cats'
import dogs from '@/data/dogs'

// data that can be fetched from any component
export default {
  cats,
  dogs,
  pets: [...cats, ...dogs]
}
