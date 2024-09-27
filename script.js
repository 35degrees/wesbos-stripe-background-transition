const triggers = document.querySelectorAll('.cool > li')
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.top')
// const trigger = document.querySelector('li > ul')

function handleEnter() {
	this.classList.add('trigger-enter')
	background.classList.add('open')
	setTimeout(() => {
		this.classList.contains('trigger-enter') &&
			this.classList.add('trigger-enter-active')
	}, 150)
	const navCoords = nav.getBoundingClientRect()
	console.log(navCoords)
	const navHeight = navCoords.top
	const dropdown = this.querySelector('.dropdown')
	const dropdownCoords = dropdown.getBoundingClientRect()
	const height = dropdownCoords.height
	const width = dropdownCoords.width
	const top = dropdownCoords.top
	const left = dropdownCoords.left
	background.style.height = `${height}px`
	background.style.width = `${width}px`
	background.style.transform = `translate(${left}px,${top - navHeight}px)`
	// console.log({ thisHeight })
}

function handleLeave(e) {
	this.classList.remove('trigger-enter', 'trigger-enter-active')
	background.classList.remove('open')
}

triggers.forEach((trigger) =>
	trigger.addEventListener('mouseenter', handleEnter)
)
triggers.forEach((trigger) =>
	trigger.addEventListener('mouseleave', handleLeave)
)
