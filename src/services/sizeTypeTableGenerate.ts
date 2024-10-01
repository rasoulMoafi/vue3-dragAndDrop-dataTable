export const changeSizeToGrid = (size: string): string => {
        if (size == 'sm' ){
            return '1fr'
        }else if (size === 'md'){
            return '2fr'
        }else if(size === 'lg'){
            return '3fr'
        }else if(size === 'xl'){
            return '4fr'
        }else{
            return `${size}px`
        }
}