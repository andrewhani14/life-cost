import { HeartIcon } from '@heroicons/react/24/outline'

export default function FooterBar(){
  return (
    <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
      <HeartIcon className="w-4 h-4" />
      <span>Built with care — No backend required.</span>
    </div>
  )
}
