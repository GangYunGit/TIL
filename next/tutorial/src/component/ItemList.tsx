import { Grid } from 'semantic-ui-react'
import type { ItemInfo } from '@/pages';
import Link from 'next/link';

interface Iprops {
  list: ItemInfo[];
}

export default function ItemList({ list }: Iprops) {
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          {list.map((item, index) => (
            <Grid.Column key={index}>
              <Link href="/detail/[id]" as={`/detail/${item.id}`}>
                <img src={item.image_link} alt={item.name} />
                <strong>{item.name}</strong>
                <br />
                <span>
                  {item.category} {item.product_type}
                </span>
                <br />
                <strong style={{ color: '#00bcd4' }}>${item.price}</strong>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  )
}