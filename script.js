const session = document.getElementById('session');
const courseType = document.getElementById('courseType');
const examType = document.getElementById('examType');
const course = document.getElementById('course');
const year = document.getElementById('year');
const rollNo = document.getElementById('rollNo');
const submitBtn = document.querySelector('.submitBtn');
const mainLink = document.getElementById('mainLink');

const arr = [session, courseType, examType, course, year];
arr.forEach((element) => {
	element.addEventListener('change', () => {
		if (everythingFilled() && everythingFilledCorrectly()) {
			mainLink.setAttribute('href', './assets/result.pdf');
			mainLink.setAttribute('download', 'result');
		}
	});
});

rollNo.addEventListener('keyup', () => {
	if (everythingFilled() && everythingFilledCorrectly()) {
		mainLink.setAttribute('href', './assets/result.pdf');
		mainLink.setAttribute('download', 'result');
	}
});

submitBtn.addEventListener('click', () => {
	validator();
});

function validator() {
	if (everythingFilled() && everythingFilledCorrectly()) {
		mainLink.setAttribute('href', './assets/result.pdf');
		mainLink.setAttribute('download', 'result');
	} else if (everythingFilled()) {
		mainLink.setAttribute('href', '.#');
		mainLink.removeAttribute('download');
		alert('Wrong Roll No.');
	} else {
		mainLink.setAttribute('href', '#');
		mainLink.removeAttribute('download');
		alert('Fill All the values');
	}
}

function everythingFilled() {
	if (
		session.value !== 'nil' &&
		courseType.value !== 'nil' &&
		examType.value !== 'nil' &&
		course.value !== 'nil' &&
		year.value !== 'nil' &&
		rollNo.value !== ''
	) {
		return true;
	}
	return false;
}

function everythingFilledCorrectly() {
	if (
		session.value === 'correct' &&
		courseType.value === 'correct' &&
		examType.value === 'correct' &&
		course.value === 'correct' &&
		year.value === 'correct' &&
		rollNo.value === '3325877'
	) {
		return true;
	}
	return false;
}
