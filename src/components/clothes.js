import { Typography, Container, Box, InputLabel, NativeSelect, TextField} from "@material-ui/core"
import { Autocomplete } from '@material-ui/lab';

const clothes = [
  {
    slot: 'headGear',
    items: [
      {
        name: 'hat',
        description: 'a hat'
      },
      {
        name: 'pipo',
        description: 'a hat but in finnish'
      }
    ]
  },
  {
    slot: 'upperbody',
    items: [
      {
        name: 't-shirt',
        description: 'a short sleeved shirt'
      },
      {
        name: 'tank top',
        description: 'a sleeveless shirt'
      }
    ]
  },
  {
    slot: 'lowerbody',
    items: [
      {
        name: 'shorts',
        description: 'a pair of shorts'
      },
      {
        name: 'leggings',
        description: 'also called tights'
      }
    ]
  }
]

const lowerbodyitems = clothes.filter(clothes => clothes.slot.includes('lowerbody')).map(item => (item.items))[0]
const testClothes = [
  {name: 'shorts', description: 'a pair of shorts'},
  {name: 'leggings', description: 'also called tights'}
]

console.log('function return: ', lowerbodyitems)
console.log('right form: ', testClothes)

const Clothes = ({status}) => {
  if(status != 'Ready') {
    return null
  }
    

  return(
    <Container>
      <Box m={4} y={2} textAlign='left'>
        <Box m={4} y={2} textAlign='left'>
          <Autocomplete
            multiple
            limitTags={3}
            id="head-tags"
            options={clothes.filter(clothes => clothes.slot.includes('headGear')).map(item => (item.items))[0]}
            getOptionLabel={(option) => option.name}
            defaultValue={[clothes.filter(clothes => clothes.slot.includes('headGear')).map(item => (item.items))[0][0]]}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" label="head" />
            )}
          />
        </Box>
        <Box m={4} y={2} textAlign='left'>
          <Autocomplete
            multiple
            limitTags={3}
            id="upperbody-tags"
            options={clothes.filter(clothes => clothes.slot.includes('upperbody')).map(item => (item.items))[0]}
            getOptionLabel={(option) => option.name}
            defaultValue={[clothes.filter(clothes => clothes.slot.includes('upperbody')).map(item => (item.items))[0][0]]}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" label="upper body" />
            )}
          />
        </Box>
        <Box m={4} y={2} textAlign='left'>
          <Autocomplete
            multiple
            limitTags={3}
            id="lowerbody-tags"
            options={clothes.filter(clothes => clothes.slot.includes('lowerbody')).map(item => (item.items))[0]}
            getOptionLabel={(option) => option.name}
            defaultValue={[clothes.filter(clothes => clothes.slot.includes('lowerbody')).map(item => (item.items))[0][0]]}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" label="lower body" />
            )}
          />
        </Box>
      </Box>
    </Container>
  )
}


export default Clothes