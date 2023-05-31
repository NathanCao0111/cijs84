import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [word, setWord] = useState('')
  const [count, setCount] = useState(0)
  const [isBtn, setIsBtn] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      return setCount(word.split('').length)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [word])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsBtn(true)
      }
      else {
        setIsBtn(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScrollTop = () => {
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="App" style={{ padding: 32 }}>
      <textarea
      placeholder='Enter text ...'
      value={word}
      onChange={e => setWord(e.target.value)}
      />
      <p>Word(s): {count}</p>
      <h1>Lorem Ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed arcu sit amet felis mattis auctor. Curabitur semper, erat sit amet molestie semper, purus turpis finibus nisl, ut feugiat ex leo nec quam. Maecenas rhoncus viverra enim, id commodo erat pretium posuere. Praesent vehicula tempor risus, vitae semper leo ultricies ac. Etiam erat est, consequat quis turpis sed, hendrerit lobortis lectus. Integer varius arcu nec nunc dapibus eleifend. Quisque suscipit posuere eros, non cursus orci luctus nec. Aenean quis ultricies ipsum, in volutpat diam. Suspendisse pellentesque augue tortor, vitae sollicitudin metus ullamcorper lacinia. Cras rutrum nulla a arcu laoreet rhoncus. Praesent luctus volutpat mauris ut ultricies. Nam vitae ipsum sit amet lorem placerat blandit. Praesent porta imperdiet dui. Nulla quam nibh, aliquam in ultricies vitae, bibendum ac arcu. Nullam varius nisi odio, a faucibus nisi varius eu. Ut cursus venenatis magna, et aliquet erat tincidunt vitae. Phasellus placerat, nisi a sagittis scelerisque, tortor augue porta ipsum, ac vestibulum lectus lorem et orci. Maecenas ultrices, enim sed molestie lobortis, sem magna sodales enim, iaculis maximus mauris metus quis lorem. Vivamus a orci at felis dignissim pellentesque sit amet non urna. Cras faucibus, magna nec rutrum tristique, felis nunc rhoncus sapien, in eleifend magna augue sed nisl. Vivamus commodo rhoncus ipsum at dignissim. Phasellus ultricies eros odio, a eleifend lectus accumsan sit amet. Nulla elementum dignissim dignissim. Morbi luctus pretium ligula non ultrices. Phasellus et feugiat orci. Morbi ultrices gravida urna, non suscipit dui tincidunt non. In odio mauris, aliquet sed cursus varius, facilisis sit amet diam. Mauris auctor, urna ut tincidunt lobortis, risus lacus aliquet augue, id bibendum lectus dolor vitae metus. Phasellus id aliquet ex. Aliquam blandit venenatis congue. Proin ac elit erat. Quisque eu est sem. Morbi porta sollicitudin massa quis vehicula. Vestibulum elementum dictum sapien, vitae ultricies libero tincidunt eu. Morbi varius sem ipsum. Quisque convallis ac ligula et mattis. Integer suscipit, nisi mollis sollicitudin ultrices, leo nisi aliquam ligula, non ultricies turpis lectus vitae erat. Sed porttitor lacus quis mi condimentum, ac euismod massa vestibulum. Suspendisse consequat semper hendrerit. Pellentesque sit amet facilisis velit. Praesent venenatis turpis eu augue commodo mattis. Nullam nec sapien a nibh convallis laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque tincidunt et erat eu imperdiet. Phasellus vulputate varius est, eget ultrices mi commodo non. Aenean eu maximus tortor, vel dignissim libero. Donec commodo tellus erat. Cras at vestibulum odio. Nunc rhoncus, leo vitae sodales imperdiet, lorem mi maximus quam, ac laoreet urna purus in quam. Vivamus sed imperdiet urna. Nam vel ante fermentum turpis venenatis porttitor. Phasellus interdum semper finibus. Ut lacinia, felis at lobortis accumsan, leo magna ullamcorper lacus, posuere rhoncus dui purus tincidunt orci. Etiam pretium sodales iaculis. Pellentesque sit amet ornare leo. In efficitur convallis finibus. Pellentesque tincidunt gravida ultricies. Donec euismod justo ac augue laoreet viverra. Duis porta quam ac magna egestas, a semper augue imperdiet. Suspendisse at ipsum vel augue tincidunt dignissim. Ut blandit tempus ipsum, ut tincidunt nulla gravida a. Aliquam a sodales metus. Etiam eu purus eros. Nulla nec pulvinar erat, at imperdiet quam. Morbi vel diam tortor. Suspendisse potenti. Morbi accumsan ante nec nisl iaculis venenatis. Aenean finibus odio lorem, eget tincidunt sapien placerat sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean fermentum dui id velit varius, a feugiat dui imperdiet. Pellentesque ut eros purus. Phasellus pulvinar massa molestie, efficitur neque ac, posuere nunc. Proin egestas venenatis justo ac aliquet. Vivamus justo ipsum, laoreet a sagittis ac, lobortis sit amet enim. Vivamus consequat nunc leo, a vulputate nunc pellentesque a. Nulla semper orci sit amet lacus rhoncus, at ullamcorper augue varius. Aliquam eu luctus diam. Etiam blandit arcu feugiat tincidunt mollis. Nam ornare consequat ex, et mollis nunc porta eget. Sed euismod sollicitudin augue nec laoreet. Nulla sit amet vestibulum tellus, condimentum bibendum dolor. Vestibulum imperdiet ipsum nulla, id luctus mi elementum nec. Nam luctus eu nulla quis malesuada. Nunc quis justo eu ante finibus ornare eu hendrerit dui. Sed elementum nibh neque, ac gravida ligula bibendum vitae. Fusce sagittis, eros vitae venenatis hendrerit, tortor purus aliquet lorem, et cursus nulla massa id purus. Duis eu dolor eu nulla feugiat lobortis. Maecenas erat tortor, facilisis sed augue eu, aliquam tincidunt diam. Sed lacinia placerat mauris, in tempor erat interdum eu. Suspendisse potenti. Aliquam aliquam, risus vel pretium finibus, lorem tortor placerat enim, non elementum nisl sapien eget justo. Suspendisse potenti. Pellentesque sed nulla vitae ex condimentum posuere et ut dolor. Nulla facilisi. Aenean aliquet rutrum interdum. Etiam pellentesque ac erat sed maximus. Suspendisse eget lacus at odio facilisis imperdiet. Donec ullamcorper consequat enim, sed pulvinar elit. Quisque rhoncus iaculis blandit. Fusce convallis augue nec massa eleifend, et molestie augue dignissim. Vestibulum rhoncus dui sed mi sodales iaculis. Praesent pretium egestas urna id auctor. Etiam vel orci quam. In auctor sem arcu, vitae molestie ante condimentum at. Sed vitae ante vitae enim mattis viverra ac id elit. Donec consectetur hendrerit accumsan. Duis quis dolor in est ornare facilisis a quis velit. Vivamus imperdiet imperdiet quam convallis dignissim. Morbi varius, tellus et ultrices elementum, dui est ullamcorper velit, nec tempus dui purus eu sem. Praesent ultrices et ligula in consequat. Curabitur vestibulum sodales nibh, sed dictum neque mollis vel. Donec pellentesque tortor non elit facilisis sollicitudin. Donec interdum vel urna vel luctus. Ut hendrerit, ligula nec gravida lacinia, lacus elit tempor erat, non iaculis metus sapien ultricies metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam sapien felis, porttitor nec dui ac, accumsan dictum augue. Etiam rhoncus nibh vel ornare mattis. Nam varius, ipsum sit amet blandit rhoncus, libero justo commodo dui, non varius tellus mi sed neque. Proin tempor mattis ante sed dignissim. Integer vehicula metus volutpat est mattis, ullamcorper pellentesque nulla pharetra. Morbi varius, enim a imperdiet ullamcorper, est dolor convallis odio, elementum vehicula velit diam nec justo. Suspendisse venenatis massa id magna eleifend, et feugiat leo maximus. Suspendisse nisl ex, gravida eu tellus ut, euismod ullamcorper.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed arcu sit amet felis mattis auctor. Curabitur semper, erat sit amet molestie semper, purus turpis finibus nisl, ut feugiat ex leo nec quam. Maecenas rhoncus viverra enim, id commodo erat pretium posuere. Praesent vehicula tempor risus, vitae semper leo ultricies ac. Etiam erat est, consequat quis turpis sed, hendrerit lobortis lectus. Integer varius arcu nec nunc dapibus eleifend. Quisque suscipit posuere eros, non cursus orci luctus nec. Aenean quis ultricies ipsum, in volutpat diam. Suspendisse pellentesque augue tortor, vitae sollicitudin metus ullamcorper lacinia. Cras rutrum nulla a arcu laoreet rhoncus. Praesent luctus volutpat mauris ut ultricies. Nam vitae ipsum sit amet lorem placerat blandit. Praesent porta imperdiet dui. Nulla quam nibh, aliquam in ultricies vitae, bibendum ac arcu. Nullam varius nisi odio, a faucibus nisi varius eu. Ut cursus venenatis magna, et aliquet erat tincidunt vitae. Phasellus placerat, nisi a sagittis scelerisque, tortor augue porta ipsum, ac vestibulum lectus lorem et orci. Maecenas ultrices, enim sed molestie lobortis, sem magna sodales enim, iaculis maximus mauris metus quis lorem. Vivamus a orci at felis dignissim pellentesque sit amet non urna. Cras faucibus, magna nec rutrum tristique, felis nunc rhoncus sapien, in eleifend magna augue sed nisl. Vivamus commodo rhoncus ipsum at dignissim. Phasellus ultricies eros odio, a eleifend lectus accumsan sit amet. Nulla elementum dignissim dignissim. Morbi luctus pretium ligula non ultrices. Phasellus et feugiat orci. Morbi ultrices gravida urna, non suscipit dui tincidunt non. In odio mauris, aliquet sed cursus varius, facilisis sit amet diam. Mauris auctor, urna ut tincidunt lobortis, risus lacus aliquet augue, id bibendum lectus dolor vitae metus. Phasellus id aliquet ex. Aliquam blandit venenatis congue. Proin ac elit erat. Quisque eu est sem. Morbi porta sollicitudin massa quis vehicula. Vestibulum elementum dictum sapien, vitae ultricies libero tincidunt eu. Morbi varius sem ipsum. Quisque convallis ac ligula et mattis. Integer suscipit, nisi mollis sollicitudin ultrices, leo nisi aliquam ligula, non ultricies turpis lectus vitae erat. Sed porttitor lacus quis mi condimentum, ac euismod massa vestibulum. Suspendisse consequat semper hendrerit. Pellentesque sit amet facilisis velit. Praesent venenatis turpis eu augue commodo mattis. Nullam nec sapien a nibh convallis laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque tincidunt et erat eu imperdiet. Phasellus vulputate varius est, eget ultrices mi commodo non. Aenean eu maximus tortor, vel dignissim libero. Donec commodo tellus erat. Cras at vestibulum odio. Nunc rhoncus, leo vitae sodales imperdiet, lorem mi maximus quam, ac laoreet urna purus in quam. Vivamus sed imperdiet urna. Nam vel ante fermentum turpis venenatis porttitor. Phasellus interdum semper finibus. Ut lacinia, felis at lobortis accumsan, leo magna ullamcorper lacus, posuere rhoncus dui purus tincidunt orci. Etiam pretium sodales iaculis. Pellentesque sit amet ornare leo. In efficitur convallis finibus. Pellentesque tincidunt gravida ultricies. Donec euismod justo ac augue laoreet viverra. Duis porta quam ac magna egestas, a semper augue imperdiet. Suspendisse at ipsum vel augue tincidunt dignissim. Ut blandit tempus ipsum, ut tincidunt nulla gravida a. Aliquam a sodales metus. Etiam eu purus eros. Nulla nec pulvinar erat, at imperdiet quam. Morbi vel diam tortor. Suspendisse potenti. Morbi accumsan ante nec nisl iaculis venenatis. Aenean finibus odio lorem, eget tincidunt sapien placerat sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean fermentum dui id velit varius, a feugiat dui imperdiet. Pellentesque ut eros purus. Phasellus pulvinar massa molestie, efficitur neque ac, posuere nunc. Proin egestas venenatis justo ac aliquet. Vivamus justo ipsum, laoreet a sagittis ac, lobortis sit amet enim. Vivamus consequat nunc leo, a vulputate nunc pellentesque a. Nulla semper orci sit amet lacus rhoncus, at ullamcorper augue varius. Aliquam eu luctus diam. Etiam blandit arcu feugiat tincidunt mollis. Nam ornare consequat ex, et mollis nunc porta eget. Sed euismod sollicitudin augue nec laoreet. Nulla sit amet vestibulum tellus, condimentum bibendum dolor. Vestibulum imperdiet ipsum nulla, id luctus mi elementum nec. Nam luctus eu nulla quis malesuada. Nunc quis justo eu ante finibus ornare eu hendrerit dui. Sed elementum nibh neque, ac gravida ligula bibendum vitae. Fusce sagittis, eros vitae venenatis hendrerit, tortor purus aliquet lorem, et cursus nulla massa id purus. Duis eu dolor eu nulla feugiat lobortis. Maecenas erat tortor, facilisis sed augue eu, aliquam tincidunt diam. Sed lacinia placerat mauris, in tempor erat interdum eu. Suspendisse potenti. Aliquam aliquam, risus vel pretium finibus, lorem tortor placerat enim, non elementum nisl sapien eget justo. Suspendisse potenti. Pellentesque sed nulla vitae ex condimentum posuere et ut dolor. Nulla facilisi. Aenean aliquet rutrum interdum. Etiam pellentesque ac erat sed maximus. Suspendisse eget lacus at odio facilisis imperdiet. Donec ullamcorper consequat enim, sed pulvinar elit. Quisque rhoncus iaculis blandit. Fusce convallis augue nec massa eleifend, et molestie augue dignissim. Vestibulum rhoncus dui sed mi sodales iaculis. Praesent pretium egestas urna id auctor. Etiam vel orci quam. In auctor sem arcu, vitae molestie ante condimentum at. Sed vitae ante vitae enim mattis viverra ac id elit. Donec consectetur hendrerit accumsan. Duis quis dolor in est ornare facilisis a quis velit. Vivamus imperdiet imperdiet quam convallis dignissim. Morbi varius, tellus et ultrices elementum, dui est ullamcorper velit, nec tempus dui purus eu sem. Praesent ultrices et ligula in consequat. Curabitur vestibulum sodales nibh, sed dictum neque mollis vel. Donec pellentesque tortor non elit facilisis sollicitudin. Donec interdum vel urna vel luctus. Ut hendrerit, ligula nec gravida lacinia, lacus elit tempor erat, non iaculis metus sapien ultricies metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam sapien felis, porttitor nec dui ac, accumsan dictum augue. Etiam rhoncus nibh vel ornare mattis. Nam varius, ipsum sit amet blandit rhoncus, libero justo commodo dui, non varius tellus mi sed neque. Proin tempor mattis ante sed dignissim. Integer vehicula metus volutpat est mattis, ullamcorper pellentesque nulla pharetra. Morbi varius, enim a imperdiet ullamcorper, est dolor convallis odio, elementum vehicula velit diam nec justo. Suspendisse venenatis massa id magna eleifend, et feugiat leo maximus. Suspendisse nisl ex, gravida eu tellus ut, euismod ullamcorper.
      </p>
      {isBtn && <button className='btn' onClick={handleScrollTop}>Back to top</button>}
    </div>
  );
}

export default App;
