$(() => {
let currentImgIndex = 0;
let highestIndex = $('.carousel-images').children().length-1;

  $('.next').on('click', () => {
const $img = $('.carousel-imgs').children().eq(currentImgIndex)
$img.css('display','none'); currentImgIndex++;
if (currentImgIndex > highestIndex)
  currentImgIndex = 0
const $img2 = $('.carousel-imgs').children().eq(currentImgIndex)

$img2.css('display','block')
})

$('.previous').on('click', () => {
const $img = $('.carousel-imgs').children().eq(currentImgIndex)

$img.css('display','none'); currentImgIndex--;
if (currentImgIndex < 0)
  currentImgIndex = highestIndex

const $img2 = $('.carousel-imgs').children().eq(currentImgIndex)
$img2.css('display','block')
})
});

$(() => {
    $('form').on('submit', (event) => {

        event.preventDefault();

        const userInput = $('input[type="text"]').val();

        $.ajax({
            url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput,
        }).then(
            (data) => {
                console.log(data);
                $('#title').text(data.Title);
                $('#year').text(data.Year);
                $('#rating').text(data.Rated);
            },
            (error) => {
                console.log('bad request');
            }
        );

    })

})
