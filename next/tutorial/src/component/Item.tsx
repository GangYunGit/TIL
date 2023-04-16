import { ItemInfo } from "@/pages";
import { Button, Header, Divider } from "semantic-ui-react"

interface Iprops {
  item: ItemInfo;
}

export default function Item({ item }: Iprops) {
  const { image_link, name, price, description } = item;
  return (
    <>
      <div>
        <img src={image_link} alt={name} />
      </div>
      <div>
        <strong>{name}</strong>
        <br />
        <strong style={{ color: '#00bcd4' }}>${price}</strong>
      </div>
      <Button color="orange">구매하기</Button>
      <Divider />
      <div>
        <p>{description}</p>
      </div>
      <Divider />
    </>
  )
}