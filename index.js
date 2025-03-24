
const closeElement = (selector) => {
  const element = document.querySelector(selector);
  element.style.display = 'none';
}
//
//const curTime = Date.now();
//const tenAhead = curTime + 1000000;
//const startTimer = setInterval(() => {
//  const timer = document.querySelector('.sale-timer');
//  timer.innerHTML = `${(tenAhead - Date.now()).toString()} min`;
//}, 1000);

function countdown( elementName, minutes, seconds )
{
    let element, endTime, hours, mins, msLeft, time;
    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }
    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "Too Late :(";
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = `${(hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() )} min`;
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }
    element = document.querySelector('.sale-timer');
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}

countdown( "ten-countdown", 10, 0 );

// startTimer();
