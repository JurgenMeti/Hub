import { formatDate } from '@/lib/utils'
import { EyeIcon} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image';
import { Button } from './ui/button';

const StartupCard = ({post}:{post: StartupTypeCard} ) => {
  const{ _createdAt, views, author:{ _id: author,name }, title, category, _id, image, description } =post;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className='text-20 font-semibold startup_card_date'>
          {formatDate(_createdAt)}
        </p>
        <div className="flex gap-1.5">
          <EyeIcon className='size-6 text-primary'/>
          <span className='text-16 font-medium'>{views}</span>
        </div>

        <div className='flex-between mt-5 gap-5'>
          <div className='flex-1'>
            <Link href={`/user/${author._id}`}>
            <p className='text-16 font-600 line-clamp-1'>
              {name}
            </p>
            </Link>
            <Link href={`/startup/${_id}`}>
            <h3 className='text-22 font-semibold line-clamp-1'>
              {title}
            </h3>
            
            </Link>
          </div>
          <Link href={`/user/${author._id}`}>
          <Image src="/logo1.png" alt="Logo" width={48} height={48} className="postauthorimage" />
          </Link>
        </div>
      </div>
      <Link href={`/startup/${_id}`}>
      <p className='startup-card_desc'>
        {description}</p>

     
        <img src= "https://i.imgur.com/02FHkiB.png" alt="startupimage" className="startup-card_img" />
        </Link>
        <div className='flex-between gap-3 mt-5'>
          <Link href={`/?query=${category.toLowerCase()}`}>
          <p className='text-16 font-medium'>{category}</p>
          </Link>
          <Button className='startup-card_btn' asChild>
            <Link href={`/startup/${_id}`}>
            Details
            </Link>
          </Button>
        </div>
    </li>
  )
}

export default StartupCard
