import CardComponent from '../cards/CardComponent'

function CircuitsListItem({ circuit }) {
  return (
    <CardComponent
      element={circuit}
      type='Circuit'
    />
  )
}

export default CircuitsListItem
