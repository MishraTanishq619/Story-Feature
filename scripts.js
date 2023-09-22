const data = [
	{
		dp: "static/st1.avif",
		st: "static/radu-florin-OP8655xgBjo-unsplash.jpg",
	},
	{
		dp: "static/st2.avif",
		st: "static/omid-armin-qFKIqEaaw5A-unsplash.jpg",
	},
	{
		dp: "static/st3.avif",
		st: "static/ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg",
	},
	{
		dp: "static/st4.avif",
		st: "static/danijel-skabic-BWRXQ-t3jWU-unsplash.jpg",
	},
	{
		dp: "static/st5.avif",
		st: "static/darko-mitev-c5t_j1zlk1Y-unsplash.jpg",
	},
	{
		dp: "static/st3.avif",
		st: "static/michael-dam-mEZ3PoFGs_k-unsplash.jpg",
	},
	{
		dp: "static/st2.avif",
		st: "static/rafaella-mendes-diniz-et_78QkMMQs-unsplash.jpg",
	},
	{
		dp: "static/st4.avif",
		st: "static/corey-saldana-pIKQbdSzF_k-unsplash.jpg",
	},
	{
		dp: "static/st1.avif",
		st: "static/darko-mitev-c5t_j1zlk1Y-unsplash.jpg",
	},
];

let stories = document.querySelector("#stories");
let fullscreen = document.querySelector("#fullscreen");

let likes = [];
st = "";
data.forEach((e, k) => {
	st += `<div class="story"><img id="${k}" src="${e.dp}" alt="${k}" /></div>`;
	likes[k] = 2;
});
stories.innerHTML += st;

console.log(likes);

stories.addEventListener("click", (dets) => {
	fullscreen.innerHTML = `<img id="${dets.target.id}" src="${
		data[dets.target.id].st
	}" alt="" /><h2 class="likes">likes : ${likes[dets.target.id]}</h2>`;
	fullscreen.style.zIndex = "9";

	fullscreen.addEventListener("mouseleave", () => {
		setTimeout(() => {
			fullscreen.innerHTML = "";
			fullscreen.style.zIndex = "-9";
		}, 2000);
	});
});

// heart icon

let ic = document.getElementById("ic");

fullscreen.addEventListener("dblclick", (dets) => {
	likes[dets.target.id] += 1;
	fullscreen.innerHTML = `<img id="${dets.target.id}" src="${
		data[dets.target.id].st
	}" alt="" /><h2 class="likes">likes : ${likes[dets.target.id]}</h2>`;
	//
	ic.style.transform = "translate(16vmin, 20vmin) scale(1)";
	setTimeout(() => {
		ic.style.transform = "translate(16vmin, 20vmin) scale(0)";
	}, 500);
});
