import { Container } from '@mui/system';
import React from 'react'
import { Badge , Grid } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
const Banner = () => {
  return (
    <div>
    <Grid container spacing={2} columnSpacing={{sm:12,md:8}}>
  <Grid item xs={8}>
    
     <img src="https://www.bing.com/images/blob?bcid=Sxo3kP59EyUFZX5nEPGNJb7s2GyJ.....90" alt="" width='100%' height='150%' />   
    
  </Grid>
  <Grid item xs={4}>
   <h2>SHOW CASE OF BOOKS</h2>
   <Badge  >
  <BookIcon color="primary" />
  RARE BOOKS
</Badge>
     

 <p><strong><i>Books are important for the mind, heart, and soul. But don't take it from us: These quotes about reading speak for themselves.

By Stefanie Hargreaves

The power to be found between the pages of a book is formidable, indeed. And these 50 inspiring quotes about books and reading are here to remind you of that. For, as author Anna Quindlen says, "Books are the plane, and the train, and the road. They are the destination, and the journey. They are home."</i></strong></p><br />
<h3>ABOUT THE BOOKS </h3>

<Badge  >
  <AutoStoriesRoundedIcon color="primary" />
  SHORT STORY
</Badge>

<p><strong><i> "Today a reader, tomorrow a leader."  Margaret Fuller

"A word after a word after a word is power."  Margaret Atwood

"One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time."  Carl Sagan

"Show me a family of readers, and I will show you the people who move the world."  Napoleon Bonaparte

"A book is a garden, an orchard, a storehouse, a party, a company by the way, a counselor, a multitude of counselors." Charles Baudelaire

"When I look back, I am so impressed again with the life-giving power of literature. If I were a young person today, trying to gain a sense of myself in the world, I would do that again by reading, just as I did when I was young."  Maya Angelou </i></strong></p>
  </Grid>
  </Grid>
    </div>
  )
}

export default Banner;