const express = require("express");
const axios = require("axios");
const app = express();
const port = 1773;

const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNTZlZjAyNDEtODNjOC00YzM5LTgzYzktOTBjZmUxNTRkNjNlIn0sImlhdCI6MTY4MzEyMjIxMywiZXhwIjoxODYzMTIyMjEzfQ.1B5lTPRDL5LYgqJENvR9CHXNhJdI8ga013PCt_hOXQc";

app.get("/", (req, res) => {
	axios
		.get("http://3.111.46.154/api/api/master/stcount/88888", {
			headers: {
				"x-auth-token": token
			}
		})
		.then((axiosres) => {
			console.log(res.data);
			res.json({
				tpcnt: axiosres.data.tpcnt[0].total,
				ptot: axiosres.data.ptot[0].totalpaid,
				utot: axiosres.data.utot[0].totalupd,
				fztot: axiosres.data.fztot[0].totalfz
			});
		});
});

app.get("/board", (req, res) => {
	axios
		.get("http://3.111.46.154/api/api/master/stboard/88888", {
			headers: {
				"x-auth-token": token
			}
		})
		.then((axiosres) => {
			console.log(axiosres.data);
			res.json(axiosres.data);
			// res.json({
			// 	tpcnt: axiosres.data.tpcnt[0].total,
			// 	ptot: axiosres.data.ptot[0].totalpaid,
			// 	utot: axiosres.data.utot[0].totalupd,
			// 	fztot: axiosres.data.fztot[0].totalfz
			// });
		});
});

app.get("/mode", (req, res) => {
	axios
		.get("http://3.111.46.154/api/api/master/stmode/88888", {
			headers: {
				"x-auth-token": token
			}
		})
		.then((axiosres) => {
			console.log(axiosres.data);
			res.json({
				online: axiosres.data.cnt[0].count[0].total,
				DD: axiosres.data.cnt[1].count[0].total
			});
		});
});

app.get("/district", (req, res) => {
	axios
		.get("http://3.111.46.154/api/api/master/stdt/88888", {
			headers: {
				"x-auth-token": token
			}
		})
		.then((axiosres) => {
			console.log(axiosres.data);
			res.json(axiosres.data);
		});
});

app.get("/gender", (req, res) => {
	axios
		.get("http://3.111.46.154/api/api/master/stgen/88888", {
			headers: {
				"x-auth-token": token
			}
		})
		.then((axiosres) => {
			console.log(axiosres.data);
			res.json(axiosres.data);
		});
});

app.get("/community", (req, res) => {
	axios
		.get("http://3.111.46.154/api/api/master/stcomm/88888", {
			headers: {
				"x-auth-token": token
			}
		})
		.then((axiosres) => {
			console.log(axiosres.data);
			res.json(axiosres.data);
		});
});

app.get("/government", (req, res) => {
	axios
		.get("http://3.111.46.154/api/api/master/stgov/88888", {
			headers: {
				"x-auth-token": token
			}
		})
		.then((axiosres) => {
			console.log(axiosres.data);
			res.json(axiosres.data);
		});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
