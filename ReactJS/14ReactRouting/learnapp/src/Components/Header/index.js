import React from "react";
import About from "../About";
import Contact from "../Contact Us";
import Gallery from "../Gallery";
import './index.css'
import { Link } from "react-router-dom";
export default function Header(){
return(
    <div>
        
        <ul className='header1'>
            <li className='subheading'><Link className ='link' to ='/'>Home</Link></li>
            <li className='subheading'><Link className ='link' to='/about'>About</Link></li>
            <li className='subheading'><Link className ='link' to='/contact'>Contact</Link></li>
            <li className='subheading'><Link className ='link' to='/gallery'>Gallery</Link></li>
            <li className='subheading'><Link className ='link' to='/dashboard'>Dashboard</Link></li>
        </ul>

        Nature, in the broadest sense, is the natural, physical, material world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena.[1]

The word nature is borrowed from the Old French nature and is derived from the Latin word natura, or "essential qualities, innate disposition", and in ancient times, literally meant "birth".[2] In ancient philosophy, natura is mostly used as the Latin translation of the Greek word physis (φύσις), which originally related to the intrinsic characteristics that plants, animals, and other features of the world develop of their own accord.[3][4] The concept of nature as a whole, the physical universe, is one of several expansions of the original notion;[1] it began with certain core applications of the word φύσις by pre-Socratic philosophers (though this word had a dynamic dimension then, especially for Heraclitus), and has steadily gained currency ever since. During the advent of modern scientific method in the last several centuries, nature became the passive reality, organized and moved by divine laws.[5][6] With the Industrial revolution, nature increasingly became seen as the part of reality deprived from intentional intervention: it was hence considered as sacred by some traditions (Rousseau, American transcendentalism) or a mere decorum for divine providence or human history (Hegel, Marx). However, a vitalist vision of nature, closer to the presocratic one, got reborn at the same time, especially after Charles Darwin.[1]

Within the various uses of the word today, "nature" often refers to geology and wildlife. Nature can refer to the general realm of living plants and animals, and in some cases to the processes associated with inanimate objects—the way that particular types of things exist and change of their own accord, such as the weather and geology of the Earth. It is often taken to mean the "natural environment" or wilderness—wild animals, rocks, forest, and in general those things that have not been substantially altered by human intervention, or which persist despite human intervention. For example, manufactured objects and human interaction generally are not considered part of nature, unless qualified as, for example, "human nature" or "the whole of nature". This more traditional concept of natural things that can still be found today implies a distinction between the natural and the artificial, with the artificial being understood as that which has been brought into being by a human consciousness or a human mind. Depending on the particular context, the term "natural" might also be distinguished from the unnatural or the supernatural
    </div>
)
}
