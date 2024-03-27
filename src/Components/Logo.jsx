import React from 'react'
import Styles from  './Styles/logo.module.css'
function Logo(props) {
    const {className} = props;
  return (
    <div className={`${Styles.logo} ${className}`}>
        <img
          src='https://s3-alpha-sig.figma.com/img/a010/4578/5698b27c7d3551093a32df774db0abde?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YQpWcogb36VtCSYO~PqsBrgmLIomYjABILIA-XPOzRNxmrLYJM5fkK9ks23MSW9ropdbyorawKIfdCZZtKjH~7qYvvzyUZsIpHlPA8fjiTbWnwZ8NBhOMew0~P36AhemCtt~O2pSateJIvHz1ATFgMvR1MoAujlMTGZZZ7vSfY~HlK6ABsoPfgzsAoXzJqYdtovU7h9Gabh8rWzJeh9LGN5YnTY7ua4c0KasvTszYufewJxbRR~PZQN23E69MRbAMt8ekrvIM1o10TaRsF-IxUKBnN7HLs5xLnbjD2wePXXvl1R~7gcxCoNH43Zno2YVmUkwRnm~Xqex8S8cMLsS1Q__'
          alt='logo'
          className={Styles.logo_img}
        />
        <p className={Styles.logo_text}>Musicart</p>
      </div> 
  )
}

export default Logo