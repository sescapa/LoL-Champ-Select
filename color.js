// Might need to run python -m http.server Fixing later

var JSON_file = {
	"Aatrox":{
		"Burst":0,
		"Sustainer": 20,
		"Terrain": 20,
		"Fighter": 40,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
		},
	"Ahri":{
		"Burst":20,
		"Sustainer": 20,
		"Terrain": 20,
		"Fighter": 10,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 10,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 10

		},
	"Akali": {
		"Burst":40,
		"Sustainer": 20,
		"Terrain": 0,
		"Fighter": 20,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
		},
	"Alistar":{
		"Burst":0,
		"Sustainer": 10,
		"Terrain": 0,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 25,
		"Engager": 25,
		"Follower": 10,
		"Receiver": 20,
		"Disengager": 0,
		"Disabler": 10
	},
	"Amumu":{
		"Burst":5,
		"Sustainer": 10,
		"Terrain": 5,
		"Fighter": 20,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 30,
		"Follower": 10,
		"Receiver": 10,
		"Disengager": 0,
		"Disabler": 10

	},
	"Anivia":{
		"Burst":20,
		"Sustainer": 20,
		"Terrain": 20,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 20,
		"Disabler": 20

	},
	"Annie": {
		"Burst":40,
		"Sustainer": 10,
		"Terrain": 0,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 10,
		"Follower": 30,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 20
	},
	"Aphelios":{
		"Burst":10,
		"Sustainer": 10,
		"Terrain": 10,
		"Fighter": 10,
		"Pusher": 10,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 5,
		"Follower": 10,
		"Receiver": 20,
		"Disengager": 0,
		"Disabler": 5
	},
	"Ashe":{
		"Burst":0,
		"Sustainer": 10,
		"Terrain": 10,
		"Fighter": 40,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 20,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 20
	},
	"AurelionSol":{
		"Burst": 20,
		"Sustainer": 20,
		"Terrain": 20,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 5,
		"Follower": 5,
		"Receiver": 0,
		"Disengager": 20,
		"Disabler": 10
	},
	"Azir":{
		"Burst": 10,
		"Sustainer": 30,
		"Terrain": 30,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 30,
		"Disabler": 0
	},
	"Bard":{
		"Burst": 10,
		"Sustainer": 10,
		"Terrain": 20,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 10,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 20,
		"Disabler": 20
	},
	"Blitzcrank":{
		"Burst": 25,
		"Sustainer": 0,
		"Terrain": 25,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 25,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 25
	},
	"Brand":{
		"Burst": 20,
		"Sustainer": 30,
		"Terrain": 20,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 10
	},
	"Braum":{
		"Burst": 0,
		"Sustainer": 0,
		"Terrain": 20,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 20,
		"Engager": 5,
		"Follower": 0,
		"Receiver": 15,
		"Disengager": 20,
		"Disabler": 20
	},
	"Caitlyn":{
		"Burst": 10,
		"Sustainer": 0,
		"Terrain": 20,
		"Fighter": 30,
		"Pusher": 20,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Camille":{
		"Burst": 20,
		"Sustainer": 10,
		"Terrain": 20,
		"Fighter": 30,
		"Pusher": 10,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 10,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Cassiopeia":{
		"Burst": 0,
		"Sustainer": 20,
		"Terrain": 20,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 20,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 20,
		"Disengager": 10,
		"Disabler": 10
	},
	"Chogath":{
		"Burst": 10,
		"Sustainer": 10,
		"Terrain": 30,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 10,
		"Engager": 0,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 10,
		"Disabler": 20
	},
	"Corki":{
		"Burst": 10,
		"Sustainer": 50,
		"Terrain": 0,
		"Fighter": 40,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Darius":{
		"Burst": 0,
		"Sustainer": 50,
		"Terrain": 0,
		"Fighter": 30,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Diana":{
		"Burst": 30,
		"Sustainer": 20,
		"Terrain": 0,
		"Fighter": 20,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 10,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Drmundo":{
		"Burst": 0,
		"Sustainer": 20,
		"Terrain": 0,
		"Fighter": 20,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 20,
		"Disengager": 0,
		"Disabler": 20
	},
	"Draven":{
		"Burst": 20,
		"Sustainer": 30,
		"Terrain": 0,
		"Fighter": 30,
		"Pusher": 10,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Ekko":{
		"Burst": 20,
		"Sustainer": 20,
		"Terrain": 10,
		"Fighter": 10,
		"Pusher": 20,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 10,
		"Receiver": 10,
		"Disengager": 0,
		"Disabler": 0
	},
	"Elise":{
		"Burst": 40,
		"Sustainer": 0,
		"Terrain": 0,
		"Fighter": 0,
		"Pusher": 20,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 10,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 20
	},
	"Evelynn":{
		"Burst": 30,
		"Sustainer": 20,
		"Terrain": 0,
		"Fighter": 10,
		"Pusher": 10,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 20
	},
	"Ezreal":{
		"Burst": 20,
		"Sustainer": 20,
		"Terrain": 20,
		"Fighter": 20,
		"Pusher": 10,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Fiddlesticks":{
		"Burst": 10,
		"Sustainer": 20,
		"Terrain": 10,
		"Fighter": 10,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 10,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 20
	},
	"Fiora":{
		"Burst": 0,
		"Sustainer": 20,
		"Terrain": 10,
		"Fighter": 40,
		"Pusher": 20,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Fizz":{
		"Burst": 50,
		"Sustainer": 0,
		"Terrain": 10,
		"Fighter": 0,
		"Pusher": 20,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 10,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Galio":{
		"Burst": 0,
		"Sustainer": 0,
		"Terrain": 10,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 20,
		"Engager": 10,
		"Follower": 30,
		"Receiver": 10,
		"Disengager": 0,
		"Disabler": 20
	},
	"Gangplank":{
		"Burst": 10,
		"Sustainer": 10,
		"Terrain": 10,
		"Fighter": 10,
		"Pusher": 10,
		"Enchanter": 10,
		"Protector": 0,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 20,
		"Disabler": 0
	},
	"Garen":{
		"Burst": 0,
		"Sustainer": 10,
		"Terrain": 0,
		"Fighter": 30,
		"Pusher": 10,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 10,
		"Receiver": 20,
		"Disengager": 0,
		"Disabler": 20
	},
	"Gnar":{
		"Burst": 0,
		"Sustainer": 5,
		"Terrain": 15,
		"Fighter": 25,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 15,
		"Engager": 5,
		"Follower": 10,
		"Receiver": 5,
		"Disengager": 0,
		"Disabler": 10
	},
	"Gragas":{
		"Burst": 10,
		"Sustainer": 20,
		"Terrain": 10,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 10,
		"Engager": 10,
		"Follower": 10,
		"Receiver": 10,
		"Disengager": 10,
		"Disabler": 10
	},
	"Graves":{
		"Burst": 20,
		"Sustainer": 10,
		"Terrain": 10,
		"Fighter": 30,
		"Pusher": 10,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 10
	},
	"Gwen":{
		"Burst": 20,
		"Sustainer": 20,
		"Terrain": 20,
		"Fighter": 10,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 10,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 20
	},
	"Hecarim":{
		"Burst": 0,
		"Sustainer": 10,
		"Terrain": 10,
		"Fighter": 30,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 20,
		"Follower": 10,
		"Receiver": 10,
		"Disengager": 0,
		"Disabler": 10
	},
	"Heimerdinger":{
		"Burst": 10,
		"Sustainer": 20,
		"Terrain": 10,
		"Fighter": 20,
		"Pusher": 20,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 10,
		"Receiver": 10,
		"Disengager": 0,
		"Disabler": 10
	},
	"Illaoi":{
		"Burst": 10,
		"Sustainer": 10,
		"Terrain": 20,
		"Fighter": 30,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 10,
		"Receiver": 20,
		"Disengager": 0,
		"Disabler": 0
	},
	"Irelia":{
		"Burst": 0,
		"Sustainer": 10,
		"Terrain": 10,
		"Fighter": 50,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 10
	},
	"Ivern":{
		"Burst": 0,
		"Sustainer": 10,
		"Terrain": 10,
		"Fighter": 10,
		"Pusher": 0,
		"Enchanter": 10,
		"Protector": 20,
		"Engager": 10,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 10,
		"Disabler": 10
	},
	"Janna":{
		"Burst": 0,
		"Sustainer": 10,
		"Terrain": 10,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 20,
		"Protector": 20,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 20,
		"Disabler": 20
	},
	"JarvanIV":{
		"Burst": 10,
		"Sustainer": 10,
		"Terrain": 20,
		"Fighter": 20,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 20,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 10
	},
	"Jax":{
		"Burst": 0,
		"Sustainer": 10,
		"Terrain": 20,
		"Fighter": 30,
		"Pusher": 20,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 10,
		"Receiver": 10,
		"Disengager": 0,
		"Disabler": 0
	},
	"Jayce":{
		"Burst": 10,
		"Sustainer": 30,
		"Terrain": 10,
		"Fighter": 30,
		"Pusher": 10,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Jhin":{
		"Burst": 20,
		"Sustainer": 20,
		"Terrain": 10,
		"Fighter": 30,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Jinx":{
		"Burst": 10,
		"Sustainer": 20,
		"Terrain": 10,
		"Fighter": 40,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 10,
		"Disabler": 0
	},
	"Kaisa":{
		"Burst": 10,
		"Sustainer": 30,
		"Terrain": 0,
		"Fighter": 30,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 30,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Kalista":{
		"Burst": 10,
		"Sustainer": 20,
		"Terrain": 10,
		"Fighter": 20,
		"Pusher": 10,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 10,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 10
	},
	"Karma":{
		"Burst": 10,
		"Sustainer": 20,
		"Terrain": 0,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 10,
		"Protector": 20,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 10,
		"Disengager": 20,
		"Disabler": 10
	},
	"Karthus":{
		"Burst": 10,
		"Sustainer": 40,
		"Terrain": 0,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 10,
		"Receiver": 40,
		"Disengager": 0,
		"Disabler": 0
	},
	"Kassadin":{
		"Burst": 20,
		"Sustainer": 30,
		"Terrain": 20,
		"Fighter": 10,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Katarina":{
		"Burst": 20,
		"Sustainer": 0,
		"Terrain": 10,
		"Fighter": 30,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 10,
		"Disengager": 0,
		"Disabler": 0
	},
	"Kayle":{
		"Burst": 10,
		"Sustainer": 20,
		"Terrain": 0,
		"Fighter": 20,
		"Pusher": 0,
		"Enchanter": 10,
		"Protector": 10,
		"Engager": 0,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 10,
		"Disabler": 20
	},
	"Kayn":{
		"Burst": 10,
		"Sustainer": 10,
		"Terrain": 20,
		"Fighter": 20,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 10,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 10
	},
	"Kennen":{
		"Burst": 20,
		"Sustainer": 0,
		"Terrain": 10,
		"Fighter": 10,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 10,
		"Follower": 20,
		"Receiver": 10,
		"Disengager": 0,
		"Disabler": 20
	},
	"Khazix":{
		"Burst": 40,
		"Sustainer": 0,
		"Terrain": 20,
		"Fighter": 20,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Kindred":{
		"Burst": 10,
		"Sustainer": 20,
		"Terrain": 20,
		"Fighter": 30,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 10,
		"Disengager": 0,
		"Disabler": 10
	},
	"Kled":{
		"Burst": 0,
		"Sustainer": 10,
		"Terrain": 10,
		"Fighter": 30,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 30,
		"Follower": 10,
		"Receiver": 10,
		"Disengager": 0,
		"Disabler": 0
	},
	"Kogmaw":{
		"Burst": 20,
		"Sustainer": 40,
		"Terrain": 0,
		"Fighter": 30,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 10,
		"Disabler": 0
	},
	"Leblanc":{
		"Burst": 40,
		"Sustainer": 20,
		"Terrain": 20,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Leesin":{
		"Burst": 20,
		"Sustainer": 0,
		"Terrain": 25,
		"Fighter": 20,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 10,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 5,
		"Disabler": 0
	},
	"Leona":{
		"Burst": 0,
		"Sustainer": 0,
		"Terrain": 10,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 20,
		"Follower": 20,
		"Receiver": 20,
		"Disengager": 10,
		"Disabler": 20
	},
	"Lillia":{
		"Burst": 10,
		"Sustainer": 20,
		"Terrain": 0,
		"Fighter": 10,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 20,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 10,
		"Disabler": 10
	},
	"Lissandra":{
		"Burst": 10,
		"Sustainer": 20,
		"Terrain": 10,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 10,
		"Engager": 10,
		"Follower": 10,
		"Receiver": 10,
		"Disengager": 0,
		"Disabler": 20
	},
	"Lucian":{
		"Burst": 20,
		"Sustainer": 10,
		"Terrain": 10,
		"Fighter": 40,
		"Pusher": 20,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Lulu":{
		"Burst": 10,
		"Sustainer": 10,
		"Terrain": 0,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 30,
		"Protector": 30,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 10,
		"Disengager": 10,
		"Disabler": 10
	},
	"Lux":{
		"Burst": 20,
		"Sustainer": 20,
		"Terrain": 10,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 10,
		"Protector": 20,
		"Engager": 10,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 10,
		"Disabler": 10
	},
	"Malphite":{
		"Burst": 10,
		"Sustainer": 0,
		"Terrain": 0,
		"Fighter": 10,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 20,
		"Engager": 20,
		"Follower": 10,
		"Receiver": 10,
		"Disengager": 0,
		"Disabler": 20
	},
	"Malzahar":{
		"Burst": 10,
		"Sustainer": 30,
		"Terrain": 0,
		"Fighter": 0,
		"Pusher": 10,
		"Enchanter": 0,
		"Protector": 20,
		"Engager": 0,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 20
	},
	"Maokai":{
		"Burst": 0,
		"Sustainer": 0,
		"Terrain": 20,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 15,
		"Engager": 20,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 15,
		"Disabler": 20
	},
	"Masteryi":{
		"Burst": 0,
		"Sustainer": 10,
		"Terrain": 0,
		"Fighter": 40,
		"Pusher": 30,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Missfortune":{
		"Burst": 20,
		"Sustainer": 10,
		"Terrain": 10,
		"Fighter": 30,
		"Pusher": 10,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Mordekaiser":{
		"Burst": 0,
		"Sustainer": 0,
		"Terrain": 10,
		"Fighter": 30,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 10,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 10,
		"Disengager": 0,
		"Disabler": 20
	},
	"Morgana":{
		"Burst": 0,
		"Sustainer": 10,
		"Terrain": 10,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 10,
		"Protector": 10,
		"Engager": 10,
		"Follower": 10,
		"Receiver": 10,
		"Disengager": 10,
		"Disabler": 20
	},
	"Nami":{
		"Burst": 0,
		"Sustainer": 0,
		"Terrain": 10,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 10,
		"Protector": 10,
		"Engager": 10,
		"Follower": 15,
		"Receiver": 10,
		"Disengager": 15,
		"Disabler": 20
	},
	"Nasus":{
		"Burst": 0,
		"Sustainer": 10,
		"Terrain": 0,
		"Fighter": 30,
		"Pusher": 20,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 10,
		"Follower": 10,
		"Receiver": 10,
		"Disengager": 0,
		"Disabler": 10
	},
	"Nautilus":{
		"Burst": 0,
		"Sustainer": 0,
		"Terrain": 10,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 20,
		"Engager": 20,
		"Follower": 10,
		"Receiver": 10,
		"Disengager": 10,
		"Disabler": 20
	},
	"Neeko":{
		"Burst": 10,
		"Sustainer": 20,
		"Terrain": 10,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 10,
		"Engager": 20,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 20
	},
	"Nidalee":{
		"Burst": 30,
		"Sustainer": 40,
		"Terrain": 10,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 20,
		"Protector": 0,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Nocturne":{
		"Burst": 0,
		"Sustainer": 10,
		"Terrain": 10,
		"Fighter": 30,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 20,
		"Follower": 0,
		"Receiver": 10,
		"Disengager": 0,
		"Disabler": 20
	},
	"Nunu&willum":{
		"Burst": 10,
		"Sustainer": 0,
		"Terrain": 10,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 20,
		"Engager": 10,
		"Follower": 10,
		"Receiver": 20,
		"Disengager": 10,
		"Disabler": 10
	},
	"Olaf":{
		"Burst": 10,
		"Sustainer": 10,
		"Terrain": 0,
		"Fighter": 40,
		"Pusher": 10,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 10
	},
	"Orianna":{
		"Burst": 10,
		"Sustainer": 10,
		"Terrain": 10,
		"Fighter": 0,
		"Pusher": 10,
		"Enchanter": 10,
		"Protector": 10,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 10,
		"Disabler": 10
	},
	"Ornn":{
		"Burst": 0,
		"Sustainer": 0,
		"Terrain": 20,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 20,
		"Follower": 20,
		"Receiver": 10,
		"Disengager": 10,
		"Disabler": 20
	},
	"Pantheon":{
		"Burst": 20,
		"Sustainer": 0,
		"Terrain": 0,
		"Fighter": 40,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 20,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 10
	},
	"Poppy":{
		"Burst": 0,
		"Sustainer": 0,
		"Terrain": 10,
		"Fighter": 10,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 20,
		"Engager": 10,
		"Follower": 0,
		"Receiver": 20,
		"Disengager": 20,
		"Disabler": 10
	},
	"Pyke":{
		"Burst": 30,
		"Sustainer": 0,
		"Terrain": 20,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 10,
		"Engager": 20,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Qiyana":{
		"Burst": 30,
		"Sustainer": 0,
		"Terrain": 20,
		"Fighter": 10,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 20,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 10
	},
	"Quinn":{
		"Burst": 40,
		"Sustainer": 10,
		"Terrain": 0,
		"Fighter": 30,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 20
	},
	"Rakan":{
		"Burst": 0,
		"Sustainer": 10,
		"Terrain": 10,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 10,
		"Protector": 10,
		"Engager": 20,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 20
	},
	"Rammus":{
		"Burst": 0,
		"Sustainer": 0,
		"Terrain": 0,
		"Fighter": 10,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 10,
		"Engager": 30,
		"Follower": 10,
		"Receiver": 20,
		"Disengager": 0,
		"Disabler": 20
	},
	"Reksai":{
		"Burst": 40,
		"Sustainer": 0,
		"Terrain": 20,
		"Fighter": 10,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 10,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 10
	},
	"Rell":{
		"Burst": 0,
		"Sustainer": 0,
		"Terrain": 10,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 20,
		"Engager": 20,
		"Follower": 20,
		"Receiver": 10,
		"Disengager": 0,
		"Disabler": 20
	},
	"Renekton":{
		"Burst": 20,
		"Sustainer": 0,
		"Terrain": 0,
		"Fighter": 40,
		"Pusher": 10,
		"Enchanter": 0,
		"Protector": 10,
		"Engager": 0,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 10
	},
	"Rengar":{
		"Burst": 40,
		"Sustainer": 0,
		"Terrain": 20,
		"Fighter": 20,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Riven":{
		"Burst": 30,
		"Sustainer": 0,
		"Terrain": 10,
		"Fighter": 40,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Rumble":{
		"Burst": 10,
		"Sustainer": 30,
		"Terrain": 0,
		"Fighter": 10,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 10,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 20,
		"Disengager": 0,
		"Disabler": 0
	},
	"Ryze":{
		"Burst": 20,
		"Sustainer": 20,
		"Terrain": 20,
		"Fighter": 10,
		"Pusher": 20,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 10,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 20,
		"Disabler": 0
	},
	"Samira":{
		"Burst": 10,
		"Sustainer": 20,
		"Terrain": 10,
		"Fighter": 40,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Sejuani":{
		"Burst": 0,
		"Sustainer": 0,
		"Terrain": 10,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 10,
		"Engager": 20,
		"Follower": 10,
		"Receiver": 20,
		"Disengager": 10,
		"Disabler": 20
	},
	"Senna":{
		"Burst": 20,
		"Sustainer": 20,
		"Terrain": 0,
		"Fighter": 10,
		"Pusher": 0,
		"Enchanter": 10,
		"Protector": 10,
		"Engager": 10,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Seaphine":{
		"Burst": 0,
		"Sustainer": 10,
		"Terrain": 0,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 15,
		"Protector": 15,
		"Engager": 15,
		"Follower": 15,
		"Receiver": 0,
		"Disengager": 10,
		"Disabler": 20
	},
	"Sett":{
		"Burst": 0,
		"Sustainer": 0,
		"Terrain": 0,
		"Fighter": 20,
		"Pusher": 5,
		"Enchanter": 0,
		"Protector": 5,
		"Engager": 30,
		"Follower": 10,
		"Receiver": 10,
		"Disengager": 0,
		"Disabler": 20
	},
	"Shaco":{
		"Burst": 40,
		"Sustainer": 10,
		"Terrain": 20,
		"Fighter": 10,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 10,
		"Disengager": 0,
		"Disabler": 10
	},
	"Shen":{
		"Burst": 0,
		"Sustainer": 0,
		"Terrain": 0,
		"Fighter": 20,
		"Pusher": 10,
		"Enchanter": 0,
		"Protector": 20,
		"Engager": 10,
		"Follower": 20,
		"Receiver": 10,
		"Disengager": 0,
		"Disabler": 10
	},
	"Shyvana":{
		"Burst": 0,
		"Sustainer": 0,
		"Terrain": 0,
		"Fighter": 40,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 20,
		"Disengager": 0,
		"Disabler": 20
	},
	"Singed":{
		"Burst": 0,
		"Sustainer": 20,
		"Terrain": 20,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 10,
		"Follower": 20,
		"Receiver": 10,
		"Disengager": 0,
		"Disabler": 20
	},
	"Sion":{
		"Burst": 0,
		"Sustainer": 0,
		"Terrain": 10,
		"Fighter": 5,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 5,
		"Engager": 30,
		"Follower": 10,
		"Receiver": 30,
		"Disengager": 0,
		"Disabler": 20
	},
	"Sivir":{
		"Burst": 0,
		"Sustainer": 0,
		"Terrain": 0,
		"Fighter": 40,
		"Pusher": 20,
		"Enchanter": 10,
		"Protector": 0,
		"Engager": 10,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 10,
		"Disabler": 0
	},
	"Skarner":{
		"Burst": 0,
		"Sustainer": 0,
		"Terrain": 20,
		"Fighter": 30,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 30,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 20
	},
	"Sona":{
		"Burst": 0,
		"Sustainer": 10,
		"Terrain": 10,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 10,
		"Protector": 10,
		"Engager": 10,
		"Follower": 30,
		"Receiver": 0,
		"Disengager": 10,
		"Disabler": 10
	},
	"Soraka":{
		"Burst": 0,
		"Sustainer": 10,
		"Terrain": 10,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 30,
		"Protector": 20,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 10,
		"Disabler": 20
	},
	"Swain":{
		"Burst": 0,
		"Sustainer": 20,
		"Terrain": 0,
		"Fighter": 20,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 30,
		"Disengager": 0,
		"Disabler": 10
	},
	"Sylas":{
		"Burst": 10,
		"Sustainer": 10,
		"Terrain": 10,
		"Fighter": 10,
		"Pusher": 10,
		"Enchanter": 10,
		"Protector": 10,
		"Engager": 10,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 10
	},
	"Syndra":{
		"Burst": 30,
		"Sustainer": 20,
		"Terrain": 0,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 10,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 20
	},
	"Tahmkench":{
		"Burst": 0,
		"Sustainer": 20,
		"Terrain": 0,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 30,
		"Engager": 0,
		"Follower": 10,
		"Receiver": 20,
		"Disengager": 10,
		"Disabler": 10
	},
	"Taliyah":{
		"Burst": 30,
		"Sustainer": 20,
		"Terrain": 20,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 10,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Talon":{
		"Burst": 50,
		"Sustainer": 0,
		"Terrain": 30,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Taric":{
		"Burst": 0,
		"Sustainer": 20,
		"Terrain": 0,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 10,
		"Follower": 20,
		"Receiver": 30,
		"Disengager": 0,
		"Disabler": 20
	},
	"Teemo":{
		"Burst": 0,
		"Sustainer": 30,
		"Terrain": 20,
		"Fighter": 0,
		"Pusher": 10,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 20,
		"Disengager": 0,
		"Disabler": 20
	},
	"Thresh":{
		"Burst": 0,
		"Sustainer": 0,
		"Terrain": 20,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 20,
		"Engager": 10,
		"Follower": 10,
		"Receiver": 10,
		"Disengager": 10,
		"Disabler": 20
	},
	"Tristana":{
		"Burst": 30,
		"Sustainer": 10,
		"Terrain": 0,
		"Fighter": 40,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 10,
		"Disabler": 10
	},
	"Trundle":{
		"Burst": 0,
		"Sustainer": 10,
		"Terrain": 20,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 10,
		"Receiver": 30,
		"Disengager": 10,
		"Disabler": 20
	},
	"Tryndamere":{
		"Burst": 0,
		"Sustainer": 0,
		"Terrain": 10,
		"Fighter": 40,
		"Pusher": 30,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 10,
		"Receiver": 10,
		"Disengager": 0,
		"Disabler": 0
	},
	"Twisterfate":{
		"Burst": 20,
		"Sustainer": 10,
		"Terrain": 20,
		"Fighter": 0,
		"Pusher": 20,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 10,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 20
	},
	"Twitch":{
		"Burst": 30,
		"Sustainer": 0,
		"Terrain": 0,
		"Fighter": 40,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 10,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Udyr":{
		"Burst": 10,
		"Sustainer": 20,
		"Terrain": 0,
		"Fighter": 20,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 10,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 10,
		"Disabler": 20
	},
	"Urgot":{
		"Burst": 0,
		"Sustainer": 10,
		"Terrain": 0,
		"Fighter": 30,
		"Pusher": 10,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 10,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 20
	},
	"Varus":{
		"Burst": 10,
		"Sustainer": 20,
		"Terrain": 10,
		"Fighter": 10,
		"Pusher": 10,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 20,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 10
	},
	"Vayne":{
		"Burst": 10,
		"Sustainer": 0,
		"Terrain": 0,
		"Fighter": 60,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 10,
		"Disabler": 0
	},
	"Veigar":{
		"Burst": 30,
		"Sustainer": 10,
		"Terrain": 20,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 10,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 10,
		"Disengager": 10,
		"Disabler": 10
	},
	"Velkoz":{
		"Burst": 10,
		"Sustainer": 30,
		"Terrain": 20,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 10,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 10
	},
	"Vi":{
		"Burst": 20,
		"Sustainer": 0,
		"Terrain": 10,
		"Fighter": 20,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 10,
		"Engager": 20,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 10
	},
	"Viego":{
		"Burst": 10,
		"Sustainer": 10,
		"Terrain": 10,
		"Fighter": 30,
		"Pusher": 10,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 10,
		"Receiver": 20,
		"Disengager": 0,
		"Disabler": 0
	},
	"Viktor":{
		"Burst": 0,
		"Sustainer": 20,
		"Terrain": 10,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 20,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 20,
		"Disengager": 0,
		"Disabler": 10
	},
	"Vladimir":{
		"Burst": 30,
		"Sustainer": 30,
		"Terrain": 0,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 20,
		"Disengager": 0,
		"Disabler": 0
	},
	"Volibear":{
		"Burst": 0,
		"Sustainer": 20,
		"Terrain": 0,
		"Fighter": 20,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 20,
		"Follower": 20,
		"Receiver": 10,
		"Disengager": 0,
		"Disabler": 10
	},
	"Warwick":{
		"Burst": 0,
		"Sustainer": 20,
		"Terrain": 0,
		"Fighter": 10,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 20,
		"Follower": 10,
		"Receiver": 20,
		"Disengager": 0,
		"Disabler": 20
	},
	"Wukong":{
		"Burst": 20,
		"Sustainer": 0,
		"Terrain": 0,
		"Fighter": 20,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 20,
		"Engager": 20,
		"Follower": 10,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 10
	},
	"Xayah":{
		"Burst": 0,
		"Sustainer": 0,
		"Terrain": 20,
		"Fighter": 40,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 20,
		"Disengager": 0,
		"Disabler": 10
	},
	"Xerath":{
		"Burst": 20,
		"Sustainer": 50,
		"Terrain": 0,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 10
	},
	"Xinzhao":{
		"Burst": 0,
		"Sustainer": 10,
		"Terrain": 0,
		"Fighter": 30,
		"Pusher": 10,
		"Enchanter": 0,
		"Protector": 10,
		"Engager": 10,
		"Follower": 10,
		"Receiver": 10,
		"Disengager": 0,
		"Disabler": 20
	},
	"Yasuo":{
		"Burst": 0,
		"Sustainer": 0,
		"Terrain": 0,
		"Fighter": 40,
		"Pusher": 10,
		"Enchanter": 0,
		"Protector": 10,
		"Engager": 0,
		"Follower": 30,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 10
	},
	"Yone":{
		"Burst": 0,
		"Sustainer": 0,
		"Terrain": 10,
		"Fighter":40,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 10,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 20
	},
	"Yorick":{
		"Burst": 0,
		"Sustainer": 20,
		"Terrain": 10,
		"Fighter": 40,
		"Pusher": 20,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Yuumi":{
		"Burst": 10,
		"Sustainer": 10,
		"Terrain": 10,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 10,
		"Protector": 20,
		"Engager": 20,
		"Follower": 0,
		"Receiver": 10,
		"Disengager": 0,
		"Disabler": 10
	},
	"Zac":{
		"Burst": 0,
		"Sustainer": 0,
		"Terrain": 20,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 10,
		"Engager": 30,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 20
	},
	"Zed":{
		"Burst": 40,
		"Sustainer": 20,
		"Terrain": 20,
		"Fighter": 0,
		"Pusher": 20,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 0
	},
	"Ziggs":{
		"Burst": 20,
		"Sustainer": 50,
		"Terrain": 10,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 10,
		"Disengager": 0,
		"Disabler": 0
	},
	"Zilean":{
		"Burst": 0,
		"Sustainer": 20,
		"Terrain": 0,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 20,
		"Protector": 10,
		"Engager": 0,
		"Follower": 20,
		"Receiver": 0,
		"Disengager": 20,
		"Disabler": 10
	},
	"Zoe":{
		"Burst": 40,
		"Sustainer": 30,
		"Terrain": 10,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 0,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 0,
		"Disengager": 0,
		"Disabler": 20
	},
	"Zyra":{
		"Burst": 0,
		"Sustainer": 20,
		"Terrain": 20,
		"Fighter": 0,
		"Pusher": 0,
		"Enchanter": 0,
		"Protector": 20,
		"Engager": 0,
		"Follower": 0,
		"Receiver": 20,
		"Disengager": 10,
		"Disabler": 10
	}
};

const cumulativeSum = (sum => value => sum += value)(0);
var colours = ["#6363FF", "#6373FF", "#63A3FF", "#63E3FF", "#63FFFB", "#63FFCB",
               "#63FF9B", "#63FF6B", "#7BFF63", "#BBFF63", "#DBFF63", "#FBFF63", 
               "#FFD363", "#FFB363", "#FF8363", "#FF7363", "#FF6364"];
function create_svg(position, championName){
	// var jsonData = JSON.parse('data/champion_color_inventory.json');
	var champData = JSON_file[championName];
	console.log(champData);
	var svg = d3.select("#"+position.toUpperCase() + "Color");
	var width = svg.node().getBBox()['width'];
	var height = svg.node().getBBox()['height'];

	var yScale = d3.scaleLinear().domain([0,100]).range([0, 200]);

	var graph = svg.append("g").attr("transform", "translate(" + width + "," + height + ")");;

	var dataset = Object.values(champData);
	var dataString = Object.keys(champData);
	var dataClean = dataset.map(yScale);
	var dataCleaned = [];
	var placeTracker = 0;
	for(i=0; i<dataset.length;i++){
		var newArray = [];
		if(i===0){
			newArray.push(dataClean[i]);
			newArray.push(0);
			newArray.push(dataString[i]);
		}
		else{
			newArray.push(dataClean[i]);
			newArray.push(placeTracker);
			newArray.push(dataString[i]);
		}
		placeTracker += dataClean[i];
		dataCleaned.push(newArray);
		}
	console.log(dataCleaned);
	var tooltip = d3.select("body")
				    .append("div")
				    .style("position", "absolute")
				    .style("z-index", "10")
				    .style("visibility", "hidden")
				    .style("background", "#FFF")
				    .text("Simple tooltip");

	var barChart = svg.selectAll("rect")  
	    .data(dataCleaned)  
	    .enter()  
	    .append("rect")  
	    .attr("x", 0)
	    .attr("y", function(d){return 0;})  
	    .attr("height", function(d){return 90;})
	    .attr("width", function(d){return d[0];})  
	    .attr("transform", function (d, i){var translate = [d[1],0];  return "translate("+ translate + ")"; })
	    .attr("id", function(d){return d[2]})
	    .attr("fill", function(d,i){return colours[i]})
	    .on("mouseover", function(d){tooltip.text(d.target.id); return tooltip.style("visibility", "visible");})
	    .on("mousemove", function(){return tooltip.style("top", 10+"px").style("left",10+"px");})
      	.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

};