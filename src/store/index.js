import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes: [
      {
        ID: 18226,
        Name: '1',
        Description: 'г. Оса - д.Сергеева - д. Симакова (Прямой)',
        VehicleType: 0,
        VehicleFull: 'Не задано',
        VehicleShort: 'X',
        FirstStopID: 1019477,
        FirstStopName: '',
        LastStopID: 1019477,
        LastStopName: '',
        ContractorID: 571,
        ContractorName: 'ООО ТК Виктория (г. Оса)',
        EcoClassID: 0,
        StateID: 0,
        Points: [
          {
            RouteID: 18226,
            Lat: 57.288915,
            Lon: 55.472213,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.288916,
            Lon: 55.472189,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.288767,
            Lon: 55.472159,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.28882,
            Lon: 55.471451,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.288647,
            Lon: 55.47141,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.287345,
            Lon: 55.471108,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.287096,
            Lon: 55.47107,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.286969,
            Lon: 55.47105,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.286965,
            Lon: 55.470707,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.286964,
            Lon: 55.470569,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.287004,
            Lon: 55.469527,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.287074,
            Lon: 55.469536,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.287074,
            Lon: 55.469536,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.287004,
            Lon: 55.469527,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.287076,
            Lon: 55.467657,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.287137,
            Lon: 55.466757,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.287161,
            Lon: 55.466379,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.287183,
            Lon: 55.465953,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.28723,
            Lon: 55.46497,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.287295,
            Lon: 55.463592,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.2873415,
            Lon: 55.4636,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.2873415,
            Lon: 55.4636,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.287295,
            Lon: 55.463592,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.287305,
            Lon: 55.463384,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.287344,
            Lon: 55.462606,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.287361,
            Lon: 55.462245,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.287422,
            Lon: 55.460891,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.287474,
            Lon: 55.459513,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.287586,
            Lon: 55.45671,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.285588,
            Lon: 55.456359,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.283645,
            Lon: 55.455899,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.282123,
            Lon: 55.455664,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.282124,
            Lon: 55.455632,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.282124,
            Lon: 55.455632,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.282123,
            Lon: 55.455664,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.281647,
            Lon: 55.455591,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.28158,
            Lon: 55.455581,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.280036,
            Lon: 55.455329,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.279163,
            Lon: 55.455162,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.278961,
            Lon: 55.455123,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.277511,
            Lon: 55.454914,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.277202,
            Lon: 55.454883,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276805,
            Lon: 55.454868,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276668,
            Lon: 55.454864,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276065,
            Lon: 55.454891,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.275966,
            Lon: 55.454963,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276009,
            Lon: 55.454029,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276013,
            Lon: 55.453935,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276087,
            Lon: 55.453947,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276087,
            Lon: 55.453947,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276013,
            Lon: 55.453935,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276027,
            Lon: 55.453639,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.2761,
            Lon: 55.452095,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276138,
            Lon: 55.451152,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276187,
            Lon: 55.449676,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276268,
            Lon: 55.448322,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276351,
            Lon: 55.446922,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.27638,
            Lon: 55.446338,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276458,
            Lon: 55.446351,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276458,
            Lon: 55.446351,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.27638,
            Lon: 55.446338,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276496,
            Lon: 55.444,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276641,
            Lon: 55.441104,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276692,
            Lon: 55.43927,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276806,
            Lon: 55.439281,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276806,
            Lon: 55.439281,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276692,
            Lon: 55.43927,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276733,
            Lon: 55.437815,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.275646,
            Lon: 55.437357,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.275663,
            Lon: 55.437221,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.275663,
            Lon: 55.437221,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.275646,
            Lon: 55.437357,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.273078,
            Lon: 55.436274,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.272766,
            Lon: 55.436143,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.272375,
            Lon: 55.435979,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.271094,
            Lon: 55.435475,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.270518,
            Lon: 55.435226,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.270202,
            Lon: 55.435094,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.268569,
            Lon: 55.43442,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.268223,
            Lon: 55.43429,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.267466,
            Lon: 55.434004,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.267217,
            Lon: 55.433891,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.266768,
            Lon: 55.433686,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.266351,
            Lon: 55.433528,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.265106,
            Lon: 55.43297,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.264959,
            Lon: 55.43284,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.263242,
            Lon: 55.431333,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.262033,
            Lon: 55.430271,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.259812,
            Lon: 55.428319,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.25928,
            Lon: 55.42771,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.259058,
            Lon: 55.427456,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.258682,
            Lon: 55.426692,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.258301,
            Lon: 55.42584,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.258198,
            Lon: 55.425457,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.257893,
            Lon: 55.424383,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.257799,
            Lon: 55.423715,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.257639,
            Lon: 55.423049,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.257551,
            Lon: 55.422681,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.257017,
            Lon: 55.421086,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.256874,
            Lon: 55.420669,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.256919,
            Lon: 55.420616,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.256919,
            Lon: 55.420616,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.256874,
            Lon: 55.420669,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.25667,
            Lon: 55.420078,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.256576,
            Lon: 55.419749,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.255872,
            Lon: 55.417541,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.255709,
            Lon: 55.417087,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.255769,
            Lon: 55.417013,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.255769,
            Lon: 55.417013,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.255709,
            Lon: 55.417087,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.255561,
            Lon: 55.416678,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.255479,
            Lon: 55.416428,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.254446,
            Lon: 55.41327,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.253898,
            Lon: 55.411429,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.253407,
            Lon: 55.409907,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.253318,
            Lon: 55.409633,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.253005,
            Lon: 55.408695,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.251657,
            Lon: 55.404659,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.251517,
            Lon: 55.40424,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.250948,
            Lon: 55.402533,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.249527,
            Lon: 55.398278,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.249454,
            Lon: 55.398172,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.249362,
            Lon: 55.39814,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.249318,
            Lon: 55.398125,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.249333,
            Lon: 55.39798,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.249333,
            Lon: 55.39798,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.249318,
            Lon: 55.398125,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.249362,
            Lon: 55.39814,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.249454,
            Lon: 55.398172,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.249527,
            Lon: 55.398278,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.250948,
            Lon: 55.402533,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.251517,
            Lon: 55.40424,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.251657,
            Lon: 55.404659,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.253005,
            Lon: 55.408695,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.253318,
            Lon: 55.409633,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.253407,
            Lon: 55.409907,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.253898,
            Lon: 55.411429,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.254446,
            Lon: 55.41327,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.254295,
            Lon: 55.413684,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.254009,
            Lon: 55.414,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.253803,
            Lon: 55.414228,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.253778,
            Lon: 55.414149,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.253778,
            Lon: 55.414149,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.253803,
            Lon: 55.414228,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.252731,
            Lon: 55.415415,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.251482,
            Lon: 55.416797,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.25144,
            Lon: 55.416702,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.25144,
            Lon: 55.416702,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.251478,
            Lon: 55.416802,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.251117,
            Lon: 55.417277,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.251039,
            Lon: 55.41738,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.251,
            Lon: 55.417432,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.250776,
            Lon: 55.417727,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.250692,
            Lon: 55.417838,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.250296,
            Lon: 55.418523,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.250151,
            Lon: 55.418855,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.249129,
            Lon: 55.421198,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.248872,
            Lon: 55.421938,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.24866,
            Lon: 55.422408,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.248266,
            Lon: 55.422797,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.248021,
            Lon: 55.422985,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.247866,
            Lon: 55.423104,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.247777,
            Lon: 55.423173,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.246824,
            Lon: 55.423904,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.246635,
            Lon: 55.424198,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.246608,
            Lon: 55.424651,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.247604,
            Lon: 55.427864,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.25046,
            Lon: 55.437079,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.250767,
            Lon: 55.438069,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.251128,
            Lon: 55.439235,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.250916,
            Lon: 55.439732,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.249767,
            Lon: 55.44253,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.249303,
            Lon: 55.443511,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.249009,
            Lon: 55.444019,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.248134,
            Lon: 55.445067,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.248131,
            Lon: 55.445058,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.248131,
            Lon: 55.445058,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.248134,
            Lon: 55.445067,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.249009,
            Lon: 55.444019,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.249303,
            Lon: 55.443511,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.249767,
            Lon: 55.44253,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.250916,
            Lon: 55.439732,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.251128,
            Lon: 55.439235,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.251382,
            Lon: 55.440054,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.251442,
            Lon: 55.440249,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.251585,
            Lon: 55.44071,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.251521,
            Lon: 55.440778,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.251521,
            Lon: 55.440778,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.251585,
            Lon: 55.44071,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.251597,
            Lon: 55.440748,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.253058,
            Lon: 55.445463,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.253416,
            Lon: 55.44662,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.257247,
            Lon: 55.459438,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.25831,
            Lon: 55.462988,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.258647,
            Lon: 55.464254,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.264759,
            Lon: 55.460772,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.271121,
            Lon: 55.457363,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.271678,
            Lon: 55.457038,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.271962,
            Lon: 55.456876,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.271983,
            Lon: 55.457,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.271983,
            Lon: 55.457,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.271962,
            Lon: 55.456876,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.273509,
            Lon: 55.455993,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.273564,
            Lon: 55.455962,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.27449,
            Lon: 55.455432,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.274927,
            Lon: 55.455243,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.275001,
            Lon: 55.455211,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.275138,
            Lon: 55.45515,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.275966,
            Lon: 55.454963,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.275937,
            Lon: 55.455784,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.275901,
            Lon: 55.456771,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.27589,
            Lon: 55.457103,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.275844,
            Lon: 55.457626,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276157,
            Lon: 55.45808,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276344,
            Lon: 55.458007,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276523,
            Lon: 55.457878,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276756,
            Lon: 55.4577,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276795,
            Lon: 55.457874,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276795,
            Lon: 55.457874,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276763,
            Lon: 55.457695,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.277027,
            Lon: 55.457511,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.277252,
            Lon: 55.457344,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.277282,
            Lon: 55.457324,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.277604,
            Lon: 55.45721,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.277793,
            Lon: 55.457172,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.277927,
            Lon: 55.457481,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.278038,
            Lon: 55.45803,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.27798,
            Lon: 55.458957,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.277969,
            Lon: 55.459423,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.277935,
            Lon: 55.460502,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.27792,
            Lon: 55.460755,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.277855,
            Lon: 55.46181,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.277773,
            Lon: 55.463112,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.277671,
            Lon: 55.464935,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.277992,
            Lon: 55.465633,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.277439,
            Lon: 55.466506,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276512,
            Lon: 55.467971,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276678,
            Lon: 55.468311,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276632,
            Lon: 55.468388,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276632,
            Lon: 55.468388,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.276678,
            Lon: 55.468311,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.277698,
            Lon: 55.470394,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.277854,
            Lon: 55.47071,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.278606,
            Lon: 55.47229,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.278751,
            Lon: 55.472575,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.278709,
            Lon: 55.472648,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.278709,
            Lon: 55.472648,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.278751,
            Lon: 55.472575,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.279167,
            Lon: 55.473392,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.279609,
            Lon: 55.473445,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.279973,
            Lon: 55.4738,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.279954,
            Lon: 55.473227,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.279978,
            Lon: 55.472724,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.280021,
            Lon: 55.472586,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.280124,
            Lon: 55.472332,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.280567,
            Lon: 55.471595,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.2807,
            Lon: 55.471462,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.280788,
            Lon: 55.471454,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.28107,
            Lon: 55.471817,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.281715,
            Lon: 55.470741,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.282039,
            Lon: 55.470268,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.282447,
            Lon: 55.469646,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.282642,
            Lon: 55.469364,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.283069,
            Lon: 55.470275,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.283302,
            Lon: 55.470733,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.283649,
            Lon: 55.471504,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.28384,
            Lon: 55.471893,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.283924,
            Lon: 55.472064,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.284503,
            Lon: 55.473278,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.284568,
            Lon: 55.473441,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.284694,
            Lon: 55.47377,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.284759,
            Lon: 55.473949,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.284834,
            Lon: 55.474118,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.284828,
            Lon: 55.474528,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.284833,
            Lon: 55.475271,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.284824,
            Lon: 55.47645,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.284848,
            Lon: 55.477715,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.285025,
            Lon: 55.477684,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.285167,
            Lon: 55.477671,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.285433,
            Lon: 55.477662,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.285434,
            Lon: 55.477811,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.285434,
            Lon: 55.477811,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.285433,
            Lon: 55.477662,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.285591,
            Lon: 55.477657,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.286238,
            Lon: 55.477625,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.286924,
            Lon: 55.47759,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.286929,
            Lon: 55.477825,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.286938,
            Lon: 55.478278,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.28694,
            Lon: 55.479288,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.286935,
            Lon: 55.480051,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.286975,
            Lon: 55.481094,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.286972,
            Lon: 55.481623,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.286971,
            Lon: 55.481723,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.287089,
            Lon: 55.481866,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.288079,
            Lon: 55.481838,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.288162,
            Lon: 55.481662,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.288208,
            Lon: 55.481155,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.288242,
            Lon: 55.480503,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.288265,
            Lon: 55.48006,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.288313,
            Lon: 55.479297,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.288452,
            Lon: 55.476932,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.288459,
            Lon: 55.476833,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.288672,
            Lon: 55.473609,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.288726,
            Lon: 55.47279,
            Forward: true
          },
          {
            RouteID: 18226,
            Lat: 57.288832,
            Lon: 55.472814,
            Forward: true
          }
        ],
        Stops: [
          {
            ID: 1019477,
            RouteID: 18226,
            Forward: true,
            Name: 'Микрорайон №1',
            Description: '',
            Lat: 57.288915,
            Lon: 55.472213,
            Num: 0,
            IsCheckpoint: true,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1019758,
            RouteID: 18226,
            Forward: true,
            Name: 'Товары для дома',
            Description: '',
            Lat: 57.287074,
            Lon: 55.469536,
            Num: 1,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1019649,
            RouteID: 18226,
            Forward: true,
            Name: 'Хлебокомбинат',
            Description: '',
            Lat: 57.2873415,
            Lon: 55.4636,
            Num: 2,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1019765,
            RouteID: 18226,
            Forward: true,
            Name: 'Советская',
            Description: '',
            Lat: 57.282124,
            Lon: 55.455632,
            Num: 3,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1019576,
            RouteID: 18226,
            Forward: true,
            Name: 'Дом ветеранов',
            Description: '',
            Lat: 57.276087,
            Lon: 55.453947,
            Num: 4,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1019651,
            RouteID: 18226,
            Forward: true,
            Name: 'Техникум',
            Description: '',
            Lat: 57.276458,
            Lon: 55.446351,
            Num: 5,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1019555,
            RouteID: 18226,
            Forward: true,
            Name: 'Энергетиков',
            Description: '',
            Lat: 57.276806,
            Lon: 55.439281,
            Num: 6,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1018611,
            RouteID: 18226,
            Forward: true,
            Name: 'Сельхозтехника',
            Description: '',
            Lat: 57.275663,
            Lon: 55.437221,
            Num: 7,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1018681,
            RouteID: 18226,
            Forward: true,
            Name: 'ОП Приют',
            Description: '',
            Lat: 57.256919,
            Lon: 55.420616,
            Num: 8,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1017565,
            RouteID: 18226,
            Forward: true,
            Name: 'ОП УТТ',
            Description: '',
            Lat: 57.255769,
            Lon: 55.417013,
            Num: 9,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1017355,
            RouteID: 18226,
            Forward: true,
            Name: 'д. Сергеева',
            Description: '',
            Lat: 57.249333,
            Lon: 55.39798,
            Num: 10,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1017682,
            RouteID: 18226,
            Forward: true,
            Name: 'ОП Тишково',
            Description: '',
            Lat: 57.253778,
            Lon: 55.414149,
            Num: 11,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1017995,
            RouteID: 18226,
            Forward: true,
            Name: 'ОП Тайга',
            Description: '',
            Lat: 57.25144,
            Lon: 55.416702,
            Num: 12,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1019455,
            RouteID: 18226,
            Forward: true,
            Name: 'д. Симакова',
            Description: '',
            Lat: 57.248131,
            Lon: 55.445058,
            Num: 13,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1018026,
            RouteID: 18226,
            Forward: true,
            Name: 'ОП Симакова',
            Description: '',
            Lat: 57.251521,
            Lon: 55.440778,
            Num: 14,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1019811,
            RouteID: 18226,
            Forward: true,
            Name: 'Горгаз',
            Description: '',
            Lat: 57.271983,
            Lon: 55.457,
            Num: 15,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1019815,
            RouteID: 18226,
            Forward: true,
            Name: 'АТП',
            Description: '',
            Lat: 57.276795,
            Lon: 55.457874,
            Num: 16,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1019652,
            RouteID: 18226,
            Forward: true,
            Name: 'Строителей',
            Description: '',
            Lat: 57.276632,
            Lon: 55.468388,
            Num: 17,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1019653,
            RouteID: 18226,
            Forward: true,
            Name: 'Луговая',
            Description: '',
            Lat: 57.278709,
            Lon: 55.472648,
            Num: 18,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1019588,
            RouteID: 18226,
            Forward: true,
            Name: 'Больница',
            Description: '',
            Lat: 57.285434,
            Lon: 55.477811,
            Num: 19,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1017243,
            RouteID: 18226,
            Forward: true,
            Name: 'Микрорайон №1',
            Description: '',
            Lat: 57.288832,
            Lon: 55.472814,
            Num: 20,
            IsCheckpoint: true,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          }
        ],
        Spec: {
          Len: 0,
          LenFwd: 0,
          LenBwd: 0,
          MaxSmallVehicles: 0,
          MaxMediumVehicles: 0,
          MaxBigVehicles: 0,
          MaxExtraBigVehicles: 0,
          ServiceStartTime: 0,
          MaxVehiclesAge: 0,
          ContractID: '',
          ContractDate: 0,
          BoardingOrder: 0,
          TrafficType: 0,
          ScopeType: 2,
          MunicipalType: 0,
          Notes: '',
          Equipment: null,
          DoNotTransfer: false,
          DoNotAssign: false,
          PublicAlias: '',
          ImportInfo: {
            IsImported: true,
            Datasource: 'T-One',
            UUID: '0eb4e922-3c0f-11ee-ae61-02c75454e497',
            IntID: 1,
            TextID: '8a8a0ce0-3a6a-11ee-a2c9-02c754a15f7e',
            CreatedAt: '2023-08-16T13:29:46+05:00',
            UpdatedAt: '2000-03-22T17:03:11+05:00',
            Status: ''
          }
        }
      },
      {
        ID: 18382,
        Name: '10',
        Description: 'Ильинский-Каргино (Прямое-Обратное)',
        VehicleType: 0,
        VehicleFull: 'Не задано',
        VehicleShort: 'X',
        FirstStopID: 1016968,
        FirstStopName: '',
        LastStopID: 1016968,
        LastStopName: '',
        ContractorID: 572,
        ContractorName: 'ООО Ильинское АТП',
        EcoClassID: 0,
        StateID: 0,
        Points: [
          {
            RouteID: 18382,
            Lat: 58.57274,
            Lon: 55.683496,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.572793,
            Lon: 55.683394,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.572603,
            Lon: 55.683031,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.572311,
            Lon: 55.683049,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.571582,
            Lon: 55.682905,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.571192,
            Lon: 55.682483,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.571114,
            Lon: 55.682376,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.570148,
            Lon: 55.681038,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.569311,
            Lon: 55.679893,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.569351,
            Lon: 55.679785,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.569351,
            Lon: 55.679785,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.569311,
            Lon: 55.679893,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.568949,
            Lon: 55.679399,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.568111,
            Lon: 55.678344,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.56784,
            Lon: 55.678234,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.567275,
            Lon: 55.678323,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.566091,
            Lon: 55.678518,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.566077,
            Lon: 55.67807,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.566104,
            Lon: 55.677624,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.566161183658,
            Lon: 55.677636790055,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.566161183658,
            Lon: 55.677636790055,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.566104,
            Lon: 55.677624,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.56611,
            Lon: 55.677523,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.566094,
            Lon: 55.677249,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.566041,
            Lon: 55.67703,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.566025,
            Lon: 55.676964,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.565874,
            Lon: 55.6767,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.565484,
            Lon: 55.676109,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.564924,
            Lon: 55.675323,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.564548,
            Lon: 55.674778,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.564153,
            Lon: 55.674162,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.563761,
            Lon: 55.673543,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.563306,
            Lon: 55.672685,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.562994,
            Lon: 55.671993,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.56271,
            Lon: 55.671158,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.562087,
            Lon: 55.668808,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.561885,
            Lon: 55.667943,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.561387,
            Lon: 55.6658,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.561257,
            Lon: 55.665262,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.56118,
            Lon: 55.664728,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.56115,
            Lon: 55.664104,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.561169,
            Lon: 55.663188,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.561211,
            Lon: 55.66279,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.561301,
            Lon: 55.662274,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.561448,
            Lon: 55.661578,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.561617,
            Lon: 55.660997,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.561668,
            Lon: 55.660627,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.561691,
            Lon: 55.660401,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.561686,
            Lon: 55.659931,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.561607,
            Lon: 55.659193,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.561569,
            Lon: 55.658836,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.561547,
            Lon: 55.658635,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.561630953183,
            Lon: 55.658600626347,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.561630953183,
            Lon: 55.658600626347,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.561547,
            Lon: 55.658635,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.561538,
            Lon: 55.658553,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.561379,
            Lon: 55.657057,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.561203,
            Lon: 55.656086,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.560929,
            Lon: 55.654973,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.56003,
            Lon: 55.651453,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.559989,
            Lon: 55.651383,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.559697,
            Lon: 55.650293,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.559548,
            Lon: 55.649738,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.559389,
            Lon: 55.649359,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.559233,
            Lon: 55.64901,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.556923,
            Lon: 55.64518,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.556737,
            Lon: 55.644894,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.55664,
            Lon: 55.644729,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.556513,
            Lon: 55.630726,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.556502,
            Lon: 55.629269,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.556515,
            Lon: 55.628646,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.55654,
            Lon: 55.626932,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.556659,
            Lon: 55.624466,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.556762,
            Lon: 55.622578,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.556815,
            Lon: 55.621902,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.556849,
            Lon: 55.621912,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.556849,
            Lon: 55.621912,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.556815,
            Lon: 55.621902,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.556883,
            Lon: 55.621035,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.556965,
            Lon: 55.620559,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.557133,
            Lon: 55.619984,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.557708,
            Lon: 55.618267,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.558576,
            Lon: 55.615735,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.559329,
            Lon: 55.613609,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.559448,
            Lon: 55.613258,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.559486671105,
            Lon: 55.613307379947,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.559486671105,
            Lon: 55.613307379947,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.559448,
            Lon: 55.613258,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.559932,
            Lon: 55.61183,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.560884,
            Lon: 55.609045,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.560967,
            Lon: 55.608783,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.561319,
            Lon: 55.607673,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.561738,
            Lon: 55.606076,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.56195,
            Lon: 55.605161,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.562244,
            Lon: 55.603655,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.56236,
            Lon: 55.602867,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.562525,
            Lon: 55.601545,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.562681,
            Lon: 55.599975,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.562767,
            Lon: 55.598593,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.562836,
            Lon: 55.596976,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.562844,
            Lon: 55.593162,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.562821,
            Lon: 55.591048,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.562773,
            Lon: 55.589326,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.562691,
            Lon: 55.587675,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.562511,
            Lon: 55.584636,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.562333,
            Lon: 55.581373,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.562239,
            Lon: 55.579501,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.562215,
            Lon: 55.578599,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.562239,
            Lon: 55.57751,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.562303,
            Lon: 55.576421,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.562479,
            Lon: 55.574687,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.562594,
            Lon: 55.573919,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.562686,
            Lon: 55.573308,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.562962,
            Lon: 55.571921,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.563379,
            Lon: 55.570348,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.563957,
            Lon: 55.568596,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.564642,
            Lon: 55.567029,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.569132,
            Lon: 55.557815,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.569181895016,
            Lon: 55.557904187304,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.569181895016,
            Lon: 55.557904187304,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.569132,
            Lon: 55.557815,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.570631,
            Lon: 55.55474,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.573447,
            Lon: 55.549016,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.573554,
            Lon: 55.548775,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.573666,
            Lon: 55.548518,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.573808,
            Lon: 55.548222,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.574385,
            Lon: 55.547112,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.574841,
            Lon: 55.546219,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.577546,
            Lon: 55.54094,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.5788,
            Lon: 55.538482,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.581966,
            Lon: 55.53227,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.58263,
            Lon: 55.53097,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.582915,
            Lon: 55.530414,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.584792,
            Lon: 55.526739,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.585442,
            Lon: 55.525807,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.585901,
            Lon: 55.525318,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.58657,
            Lon: 55.524695,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.587236,
            Lon: 55.524148,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.587958,
            Lon: 55.523745,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.588709,
            Lon: 55.52348,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.589431,
            Lon: 55.523456,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.590163,
            Lon: 55.523598,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.591275,
            Lon: 55.524015,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.592069,
            Lon: 55.524637,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.593025,
            Lon: 55.525769,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.59357,
            Lon: 55.5267,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.593724,
            Lon: 55.526955,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.593818,
            Lon: 55.52715,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.593736999863,
            Lon: 55.527295218921,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.593736999863,
            Lon: 55.527295218921,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.593818,
            Lon: 55.52715,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.594014,
            Lon: 55.527555,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.596379,
            Lon: 55.533933,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.597453,
            Lon: 55.536832,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.598911,
            Lon: 55.54043,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.599266,
            Lon: 55.541412,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.599336,
            Lon: 55.54176,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.599473,
            Lon: 55.5425,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.59971,
            Lon: 55.543774,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.59985,
            Lon: 55.544602,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.600195,
            Lon: 55.546579,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.600487,
            Lon: 55.548164,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.600559,
            Lon: 55.54857,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.600643,
            Lon: 55.548931,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.600911,
            Lon: 55.549889,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.601036,
            Lon: 55.550265,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.60111,
            Lon: 55.550436,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.601372,
            Lon: 55.551055,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.601497,
            Lon: 55.55145,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.601583,
            Lon: 55.551824,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.601557,
            Lon: 55.552725,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.601528,
            Lon: 55.553607,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.60144,
            Lon: 55.55527,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.601435,
            Lon: 55.555362,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.601350742016,
            Lon: 55.555345831169,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.601350742016,
            Lon: 55.555345831169,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.601435,
            Lon: 55.555362,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.601221,
            Lon: 55.559546,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.601032,
            Lon: 55.56335,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.601003,
            Lon: 55.563765,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.600867,
            Lon: 55.565502,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.600714,
            Lon: 55.566473,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.600428,
            Lon: 55.567901,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.600681,
            Lon: 55.568312,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.601365,
            Lon: 55.569441,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.60199,
            Lon: 55.570473,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.60323,
            Lon: 55.572521,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.603373,
            Lon: 55.572757,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.604684,
            Lon: 55.574877,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.60623,
            Lon: 55.577467,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.60718,
            Lon: 55.579042,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.609636,
            Lon: 55.583097,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.611379,
            Lon: 55.585973,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.622612,
            Lon: 55.604142,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.624873,
            Lon: 55.607619,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.6258,
            Lon: 55.608558,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.626705,
            Lon: 55.608987,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.628509,
            Lon: 55.609332,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.630034,
            Lon: 55.609223,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.63229,
            Lon: 55.607399,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.646515,
            Lon: 55.59469,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.648697,
            Lon: 55.592672,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.649516,
            Lon: 55.59186,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.652082,
            Lon: 55.589637,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.656186,
            Lon: 55.585693,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.656758,
            Lon: 55.585143,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.656761489128,
            Lon: 55.585155499133,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.656761489128,
            Lon: 55.585155499133,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.656758,
            Lon: 55.585143,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.660929,
            Lon: 55.581134,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.672198,
            Lon: 55.570299,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.674273,
            Lon: 55.568325,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.675299,
            Lon: 55.567724,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.67651,
            Lon: 55.567579,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.678827,
            Lon: 55.567949,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.684089,
            Lon: 55.569097,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.685321,
            Lon: 55.569553,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.686771,
            Lon: 55.571098,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.697648,
            Lon: 55.587808,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.699794,
            Lon: 55.590367,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.7069,
            Lon: 55.598881,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.710695,
            Lon: 55.604916,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.713486,
            Lon: 55.609775,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.715436,
            Lon: 55.613171,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.716633,
            Lon: 55.613982,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.723926,
            Lon: 55.618922,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.72558,
            Lon: 55.619893,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.732725,
            Lon: 55.62009,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.734239,
            Lon: 55.620131,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.734774,
            Lon: 55.619995,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.735955,
            Lon: 55.619223,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.748572,
            Lon: 55.606345,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.748647346626,
            Lon: 55.606618529273,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.748647346626,
            Lon: 55.606618529273,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.748572,
            Lon: 55.606345,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.75015,
            Lon: 55.604733,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.75177,
            Lon: 55.596075,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.752928,
            Lon: 55.589337,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.754687,
            Lon: 55.57848,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.755644,
            Lon: 55.571785,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.755934,
            Lon: 55.570623,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.758045,
            Lon: 55.567259,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.75827,
            Lon: 55.566893,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.760719,
            Lon: 55.56067,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.761154,
            Lon: 55.559375,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.761108,
            Lon: 55.55774,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.760584,
            Lon: 55.555403,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.760079,
            Lon: 55.552987,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.759447,
            Lon: 55.550132,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.758704,
            Lon: 55.546617,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.758607,
            Lon: 55.546157,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.758675,
            Lon: 55.546103,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.758675,
            Lon: 55.546103,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.758607,
            Lon: 55.546157,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.75839,
            Lon: 55.54513,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.758374,
            Lon: 55.545058,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.758331,
            Lon: 55.544811,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.7583,
            Lon: 55.543637,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.758516,
            Lon: 55.54189,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.758842,
            Lon: 55.540585,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.759784,
            Lon: 55.536294,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.760325,
            Lon: 55.532914,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.7603,
            Lon: 55.531435,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.760072,
            Lon: 55.53067,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.759485,
            Lon: 55.528704,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.759382,
            Lon: 55.528358,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.75896,
            Lon: 55.521145,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.758928,
            Lon: 55.520516,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.75856,
            Lon: 55.51342,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.758584,
            Lon: 55.512685,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.758682,
            Lon: 55.512229,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.759809,
            Lon: 55.507005,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.759781,
            Lon: 55.499599,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.75941,
            Lon: 55.497767,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.758129,
            Lon: 55.494847,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.75751,
            Lon: 55.488026,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.7574,
            Lon: 55.486353,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.757482,
            Lon: 55.485477,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.758074,
            Lon: 55.48354,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.75868,
            Lon: 55.48285,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.761667,
            Lon: 55.48131,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.764448,
            Lon: 55.47916,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.765285,
            Lon: 55.47772,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.765436,
            Lon: 55.477455,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.765772,
            Lon: 55.476773,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.76623,
            Lon: 55.475611,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.76645,
            Lon: 55.474349,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.766496,
            Lon: 55.473321,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.766482,
            Lon: 55.471231,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.766436,
            Lon: 55.464339,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.766431,
            Lon: 55.463505,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.766626,
            Lon: 55.461983,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.768039,
            Lon: 55.453453,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.769126,
            Lon: 55.446887,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.770176,
            Lon: 55.439215,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.772446,
            Lon: 55.431883,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.773377,
            Lon: 55.428877,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.773661,
            Lon: 55.427016,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.773575,
            Lon: 55.42499,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.769375,
            Lon: 55.394991,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.769225,
            Lon: 55.394085,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.76889,
            Lon: 55.39161,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.769023,
            Lon: 55.391543,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.769023,
            Lon: 55.391543,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.76889,
            Lon: 55.39161,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.768844,
            Lon: 55.391273,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.768398,
            Lon: 55.388542,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.768154,
            Lon: 55.3876,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.7663,
            Lon: 55.380979,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.76612,
            Lon: 55.379925,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.766031,
            Lon: 55.379274,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.766082,
            Lon: 55.377984,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.766193,
            Lon: 55.377334,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.766323,
            Lon: 55.376954,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.76634,
            Lon: 55.376776,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.766442,
            Lon: 55.376812,
            Forward: true
          },
          {
            RouteID: 18382,
            Lat: 58.766442,
            Lon: 55.376812,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.76634,
            Lon: 55.376776,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.766323,
            Lon: 55.376954,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.766193,
            Lon: 55.377334,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.766082,
            Lon: 55.377984,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.766031,
            Lon: 55.379274,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.76612,
            Lon: 55.379925,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.7663,
            Lon: 55.380979,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.768154,
            Lon: 55.3876,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.768398,
            Lon: 55.388542,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.768844,
            Lon: 55.391273,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.76889,
            Lon: 55.39161,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.769023,
            Lon: 55.391543,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.769023,
            Lon: 55.391543,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.76889,
            Lon: 55.39161,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.769225,
            Lon: 55.394085,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.769375,
            Lon: 55.394991,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.773575,
            Lon: 55.42499,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.773661,
            Lon: 55.427016,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.773377,
            Lon: 55.428877,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.772446,
            Lon: 55.431883,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.770176,
            Lon: 55.439215,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.769126,
            Lon: 55.446887,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.768039,
            Lon: 55.453453,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.766626,
            Lon: 55.461983,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.766431,
            Lon: 55.463505,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.766436,
            Lon: 55.464339,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.766482,
            Lon: 55.471231,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.766496,
            Lon: 55.473321,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.76645,
            Lon: 55.474349,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.76623,
            Lon: 55.475611,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.765772,
            Lon: 55.476773,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.765436,
            Lon: 55.477455,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.765285,
            Lon: 55.47772,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.764448,
            Lon: 55.47916,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.761667,
            Lon: 55.48131,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.75868,
            Lon: 55.48285,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.758074,
            Lon: 55.48354,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.757482,
            Lon: 55.485477,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.7574,
            Lon: 55.486353,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.75751,
            Lon: 55.488026,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.758129,
            Lon: 55.494847,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.75941,
            Lon: 55.497767,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.759781,
            Lon: 55.499599,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.759809,
            Lon: 55.507005,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.758682,
            Lon: 55.512229,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.758584,
            Lon: 55.512685,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.75856,
            Lon: 55.51342,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.758928,
            Lon: 55.520516,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.75896,
            Lon: 55.521145,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.759382,
            Lon: 55.528358,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.759485,
            Lon: 55.528704,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.760072,
            Lon: 55.53067,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.7603,
            Lon: 55.531435,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.760325,
            Lon: 55.532914,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.759784,
            Lon: 55.536294,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.758842,
            Lon: 55.540585,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.758516,
            Lon: 55.54189,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.7583,
            Lon: 55.543637,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.758331,
            Lon: 55.544811,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.758374,
            Lon: 55.545058,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.75839,
            Lon: 55.54513,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.758607,
            Lon: 55.546157,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.758675,
            Lon: 55.546103,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.758675,
            Lon: 55.546103,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.758607,
            Lon: 55.546157,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.758704,
            Lon: 55.546617,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.759447,
            Lon: 55.550132,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.760079,
            Lon: 55.552987,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.760584,
            Lon: 55.555403,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.761108,
            Lon: 55.55774,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.761154,
            Lon: 55.559375,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.760719,
            Lon: 55.56067,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.75827,
            Lon: 55.566893,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.758045,
            Lon: 55.567259,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.755934,
            Lon: 55.570623,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.755644,
            Lon: 55.571785,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.754687,
            Lon: 55.57848,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.752928,
            Lon: 55.589337,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.75177,
            Lon: 55.596075,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.75015,
            Lon: 55.604733,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.748273,
            Lon: 55.60665,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.748288823036,
            Lon: 55.606708511031,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.748288823036,
            Lon: 55.606708511031,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.748273,
            Lon: 55.60665,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.735955,
            Lon: 55.619223,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.734774,
            Lon: 55.619995,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.734239,
            Lon: 55.620131,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.732725,
            Lon: 55.62009,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.72558,
            Lon: 55.619893,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.723926,
            Lon: 55.618922,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.716633,
            Lon: 55.613982,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.715436,
            Lon: 55.613171,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.713486,
            Lon: 55.609775,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.710695,
            Lon: 55.604916,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.7069,
            Lon: 55.598881,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.699794,
            Lon: 55.590367,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.697648,
            Lon: 55.587808,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.686771,
            Lon: 55.571098,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.685321,
            Lon: 55.569553,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.684089,
            Lon: 55.569097,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.678827,
            Lon: 55.567949,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.67651,
            Lon: 55.567579,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.675299,
            Lon: 55.567724,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.674273,
            Lon: 55.568325,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.672198,
            Lon: 55.570299,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.660929,
            Lon: 55.581134,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.656492,
            Lon: 55.585399,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.656448965654,
            Lon: 55.585232443398,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.656448965654,
            Lon: 55.585232443398,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.656492,
            Lon: 55.585399,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.656186,
            Lon: 55.585693,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.652082,
            Lon: 55.589637,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.649516,
            Lon: 55.59186,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.648697,
            Lon: 55.592672,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.646515,
            Lon: 55.59469,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.63229,
            Lon: 55.607399,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.630034,
            Lon: 55.609223,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.628509,
            Lon: 55.609332,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.626705,
            Lon: 55.608987,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.6258,
            Lon: 55.608558,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.624873,
            Lon: 55.607619,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.622612,
            Lon: 55.604142,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.611379,
            Lon: 55.585973,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.609636,
            Lon: 55.583097,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.60718,
            Lon: 55.579042,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.60623,
            Lon: 55.577467,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.604684,
            Lon: 55.574877,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.603373,
            Lon: 55.572757,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.60323,
            Lon: 55.572521,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.60199,
            Lon: 55.570473,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.601365,
            Lon: 55.569441,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.600681,
            Lon: 55.568312,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.600428,
            Lon: 55.567901,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.600714,
            Lon: 55.566473,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.600867,
            Lon: 55.565502,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.601003,
            Lon: 55.563765,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.601032,
            Lon: 55.56335,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.601221,
            Lon: 55.559546,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.60144,
            Lon: 55.55527,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.601486,
            Lon: 55.554407,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.601493125571,
            Lon: 55.55440794579,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.601493125571,
            Lon: 55.55440794579,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.601486,
            Lon: 55.554407,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.601528,
            Lon: 55.553607,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.601557,
            Lon: 55.552725,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.601583,
            Lon: 55.551824,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.601497,
            Lon: 55.55145,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.601372,
            Lon: 55.551055,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.60111,
            Lon: 55.550436,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.601036,
            Lon: 55.550265,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.600911,
            Lon: 55.549889,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.600643,
            Lon: 55.548931,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.600559,
            Lon: 55.54857,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.600487,
            Lon: 55.548164,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.600195,
            Lon: 55.546579,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.59985,
            Lon: 55.544602,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.59971,
            Lon: 55.543774,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.599473,
            Lon: 55.5425,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.599336,
            Lon: 55.54176,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.599266,
            Lon: 55.541412,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.598911,
            Lon: 55.54043,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.597453,
            Lon: 55.536832,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.596379,
            Lon: 55.533933,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.594014,
            Lon: 55.527555,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.593818,
            Lon: 55.52715,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.593736999863,
            Lon: 55.527295218921,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.593736999863,
            Lon: 55.527295218921,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.593818,
            Lon: 55.52715,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.593724,
            Lon: 55.526955,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.59357,
            Lon: 55.5267,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.593025,
            Lon: 55.525769,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.592069,
            Lon: 55.524637,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.591275,
            Lon: 55.524015,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.590163,
            Lon: 55.523598,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.589431,
            Lon: 55.523456,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.588709,
            Lon: 55.52348,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.587958,
            Lon: 55.523745,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.587236,
            Lon: 55.524148,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.58657,
            Lon: 55.524695,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.585901,
            Lon: 55.525318,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.585442,
            Lon: 55.525807,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.584792,
            Lon: 55.526739,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.582915,
            Lon: 55.530414,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.58263,
            Lon: 55.53097,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.581966,
            Lon: 55.53227,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.5788,
            Lon: 55.538482,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.577546,
            Lon: 55.54094,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.574841,
            Lon: 55.546219,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.574385,
            Lon: 55.547112,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.573808,
            Lon: 55.548222,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.573666,
            Lon: 55.548518,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.573554,
            Lon: 55.548775,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.573447,
            Lon: 55.549016,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.570631,
            Lon: 55.55474,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.568913,
            Lon: 55.558265,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.568850276391,
            Lon: 55.558151794285,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.568850276391,
            Lon: 55.558151794285,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.568913,
            Lon: 55.558265,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.564642,
            Lon: 55.567029,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.563957,
            Lon: 55.568596,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.563379,
            Lon: 55.570348,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.562962,
            Lon: 55.571921,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.562686,
            Lon: 55.573308,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.562594,
            Lon: 55.573919,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.562479,
            Lon: 55.574687,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.562303,
            Lon: 55.576421,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.562239,
            Lon: 55.57751,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.562215,
            Lon: 55.578599,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.562239,
            Lon: 55.579501,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.562333,
            Lon: 55.581373,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.562511,
            Lon: 55.584636,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.562691,
            Lon: 55.587675,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.562773,
            Lon: 55.589326,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.562821,
            Lon: 55.591048,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.562844,
            Lon: 55.593162,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.562836,
            Lon: 55.596976,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.562767,
            Lon: 55.598593,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.562681,
            Lon: 55.599975,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.562525,
            Lon: 55.601545,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.56236,
            Lon: 55.602867,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.562244,
            Lon: 55.603655,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.56195,
            Lon: 55.605161,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.561738,
            Lon: 55.606076,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.561319,
            Lon: 55.607673,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.560967,
            Lon: 55.608783,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.560884,
            Lon: 55.609045,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.559932,
            Lon: 55.61183,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.559361,
            Lon: 55.613515,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.559288780646,
            Lon: 55.613426058917,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.559288780646,
            Lon: 55.613426058917,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.559361,
            Lon: 55.613515,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.559329,
            Lon: 55.613609,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.558576,
            Lon: 55.615735,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.557708,
            Lon: 55.618267,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.557133,
            Lon: 55.619984,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.556965,
            Lon: 55.620559,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.556883,
            Lon: 55.621035,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.556785,
            Lon: 55.622289,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.556709,
            Lon: 55.622267,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.556709,
            Lon: 55.622267,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.556785,
            Lon: 55.622289,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.556762,
            Lon: 55.622578,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.556659,
            Lon: 55.624466,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.55654,
            Lon: 55.626932,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.556515,
            Lon: 55.628646,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.556502,
            Lon: 55.629269,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.556513,
            Lon: 55.630726,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.55664,
            Lon: 55.644729,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.556737,
            Lon: 55.644894,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.556923,
            Lon: 55.64518,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.559233,
            Lon: 55.64901,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.559389,
            Lon: 55.649359,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.559548,
            Lon: 55.649738,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.559697,
            Lon: 55.650293,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.559989,
            Lon: 55.651383,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.56003,
            Lon: 55.651453,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.560929,
            Lon: 55.654973,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.561203,
            Lon: 55.656086,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.561379,
            Lon: 55.657057,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.561538,
            Lon: 55.658553,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.561569,
            Lon: 55.658836,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.561607,
            Lon: 55.659193,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.561615,
            Lon: 55.659271,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.561588855826,
            Lon: 55.65928132814,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.561588855826,
            Lon: 55.65928132814,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.561615,
            Lon: 55.659271,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.561686,
            Lon: 55.659931,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.561691,
            Lon: 55.660401,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.561668,
            Lon: 55.660627,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.561617,
            Lon: 55.660997,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.561448,
            Lon: 55.661578,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.561301,
            Lon: 55.662274,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.561211,
            Lon: 55.66279,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.561169,
            Lon: 55.663188,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.56115,
            Lon: 55.664104,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.56118,
            Lon: 55.664728,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.561257,
            Lon: 55.665262,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.561387,
            Lon: 55.6658,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.561885,
            Lon: 55.667943,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.562087,
            Lon: 55.668808,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.56271,
            Lon: 55.671158,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.562994,
            Lon: 55.671993,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.563306,
            Lon: 55.672685,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.563761,
            Lon: 55.673543,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.564153,
            Lon: 55.674162,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.564548,
            Lon: 55.674778,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.564924,
            Lon: 55.675323,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.565484,
            Lon: 55.676109,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.56556,
            Lon: 55.676224,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.565516779984,
            Lon: 55.67632865751,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.565516779984,
            Lon: 55.67632865751,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.56556,
            Lon: 55.676224,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.565874,
            Lon: 55.6767,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.566025,
            Lon: 55.676964,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.566041,
            Lon: 55.67703,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.566094,
            Lon: 55.677249,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.56611,
            Lon: 55.677523,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.566077,
            Lon: 55.67807,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.566091,
            Lon: 55.678518,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.567275,
            Lon: 55.678323,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.56784,
            Lon: 55.678234,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.568111,
            Lon: 55.678344,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.568949,
            Lon: 55.679399,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.569039,
            Lon: 55.679523,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.569014,
            Lon: 55.679591,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.569014,
            Lon: 55.679591,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.569039,
            Lon: 55.679523,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.570148,
            Lon: 55.681038,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.571114,
            Lon: 55.682376,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.571192,
            Lon: 55.682483,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.571582,
            Lon: 55.682905,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.572311,
            Lon: 55.683049,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.572603,
            Lon: 55.683031,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.572793,
            Lon: 55.683394,
            Forward: false
          },
          {
            RouteID: 18382,
            Lat: 58.57274,
            Lon: 55.683496,
            Forward: false
          }
        ],
        Stops: [
          {
            ID: 1016968,
            RouteID: 18382,
            Forward: true,
            Name: 'ОП Храм Ильи Пророка',
            Description: '',
            Lat: 58.57274,
            Lon: 55.683496,
            Num: 0,
            IsCheckpoint: true,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1019429,
            RouteID: 18382,
            Forward: true,
            Name: 'ОП Больница',
            Description: '',
            Lat: 58.569351,
            Lon: 55.679785,
            Num: 1,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1013979,
            RouteID: 18382,
            Forward: true,
            Name: 'ОП Масляна',
            Description: '',
            Lat: 58.56616118365763,
            Lon: 55.67763679005545,
            Num: 2,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1014083,
            RouteID: 18382,
            Forward: true,
            Name: 'ОП Семино',
            Description: '',
            Lat: 58.56163095318334,
            Lon: 55.65860062634675,
            Num: 3,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1019467,
            RouteID: 18382,
            Forward: true,
            Name: 'ОП Кропани',
            Description: '',
            Lat: 58.556849,
            Lon: 55.621912,
            Num: 4,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1014089,
            RouteID: 18382,
            Forward: true,
            Name: 'ОП Тупица',
            Description: '',
            Lat: 58.55948667110533,
            Lon: 55.61330737994712,
            Num: 5,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1013620,
            RouteID: 18382,
            Forward: true,
            Name: 'ОП Посер',
            Description: '',
            Lat: 58.56918189501571,
            Lon: 55.557904187303976,
            Num: 6,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1013422,
            RouteID: 18382,
            Forward: true,
            Name: 'ОП Ерши',
            Description: '',
            Lat: 58.593736999863225,
            Lon: 55.527295218921466,
            Num: 7,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1014445,
            RouteID: 18382,
            Forward: true,
            Name: 'ОП Сретенское',
            Description: '',
            Lat: 58.60135074201594,
            Lon: 55.55534583116911,
            Num: 8,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1013880,
            RouteID: 18382,
            Forward: true,
            Name: 'ОП д. Зинки',
            Description: '',
            Lat: 58.6567614891284,
            Lon: 55.58515549913282,
            Num: 9,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1013433,
            RouteID: 18382,
            Forward: true,
            Name: 'ОП Каргино',
            Description: '',
            Lat: 58.74864734662599,
            Lon: 55.60661852927271,
            Num: 10,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1019789,
            RouteID: 18382,
            Forward: true,
            Name: 'ОП Коняево',
            Description: '',
            Lat: 58.758675,
            Lon: 55.546103,
            Num: 11,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1019790,
            RouteID: 18382,
            Forward: true,
            Name: 'ОП Анисимово',
            Description: '',
            Lat: 58.769023,
            Lon: 55.391543,
            Num: 12,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1019791,
            RouteID: 18382,
            Forward: true,
            Name: 'ОП Каргино',
            Description: '',
            Lat: 58.766442,
            Lon: 55.376812,
            Num: 13,
            IsCheckpoint: true,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1019791,
            RouteID: 18382,
            Forward: false,
            Name: 'ОП Каргино',
            Description: '',
            Lat: 58.766442,
            Lon: 55.376812,
            Num: 14,
            IsCheckpoint: true,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1019790,
            RouteID: 18382,
            Forward: false,
            Name: 'ОП Анисимово',
            Description: '',
            Lat: 58.769023,
            Lon: 55.391543,
            Num: 15,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1019789,
            RouteID: 18382,
            Forward: false,
            Name: 'ОП Коняево',
            Description: '',
            Lat: 58.758675,
            Lon: 55.546103,
            Num: 16,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1013432,
            RouteID: 18382,
            Forward: false,
            Name: 'ОП Каргино',
            Description: '',
            Lat: 58.748288823035935,
            Lon: 55.60670851103091,
            Num: 17,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1013881,
            RouteID: 18382,
            Forward: false,
            Name: 'ОП д. Зинки',
            Description: '',
            Lat: 58.65644896565407,
            Lon: 55.58523244339814,
            Num: 18,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1014444,
            RouteID: 18382,
            Forward: false,
            Name: 'ОП Сретенское',
            Description: '',
            Lat: 58.60149312557086,
            Lon: 55.55440794578951,
            Num: 19,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1013422,
            RouteID: 18382,
            Forward: false,
            Name: 'ОП Ерши',
            Description: '',
            Lat: 58.593736999863225,
            Lon: 55.527295218921466,
            Num: 20,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1013619,
            RouteID: 18382,
            Forward: false,
            Name: 'ОП Посер',
            Description: '',
            Lat: 58.568850276390584,
            Lon: 55.55815179428473,
            Num: 21,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1014088,
            RouteID: 18382,
            Forward: false,
            Name: 'ОП Тупица',
            Description: '',
            Lat: 58.559288780646284,
            Lon: 55.613426058916986,
            Num: 22,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1019468,
            RouteID: 18382,
            Forward: false,
            Name: 'ОП Кропани',
            Description: '',
            Lat: 58.556709,
            Lon: 55.622267,
            Num: 23,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1014084,
            RouteID: 18382,
            Forward: false,
            Name: 'ОП Семино',
            Description: '',
            Lat: 58.561588855825704,
            Lon: 55.659281328139954,
            Num: 24,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1013978,
            RouteID: 18382,
            Forward: false,
            Name: 'ОП Масляна',
            Description: '',
            Lat: 58.56551677998394,
            Lon: 55.67632865750989,
            Num: 25,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1019466,
            RouteID: 18382,
            Forward: false,
            Name: 'ОП Больница',
            Description: '',
            Lat: 58.569014,
            Lon: 55.679591,
            Num: 26,
            IsCheckpoint: false,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          },
          {
            ID: 1016968,
            RouteID: 18382,
            Forward: false,
            Name: 'ОП Храм Ильи Пророка',
            Description: '',
            Lat: 58.57274,
            Lon: 55.683496,
            Num: 27,
            IsCheckpoint: true,
            MinStopTime: 0,
            MaxStopTime: 0,
            Radius: 0,
            ArrivedTime: 0,
            LeftTime: 0,
            MinSpeed: 0,
            Stopped: 0,
            Moved: 0,
            Odm: 0,
            Equipment: null,
            VehicleTypes: null,
            Spec: {
              RegistryNum: '',
              UpdateTime: 0,
              PublicAliases: null,
              PublicDescription: '',
              ImportInfo: {
                IsImported: false,
                Datasource: '',
                UUID: '00000000-0000-0000-0000-000000000000',
                IntID: 0,
                TextID: '',
                CreatedAt: '0001-01-01T00:00:00Z',
                UpdatedAt: '0001-01-01T00:00:00Z',
                Status: ''
              }
            }
          }
        ],
        Spec: {
          Len: 97.53,
          LenFwd: 48.764,
          LenBwd: 48.766,
          MaxSmallVehicles: 0,
          MaxMediumVehicles: 0,
          MaxBigVehicles: 0,
          MaxExtraBigVehicles: 0,
          ServiceStartTime: 0,
          MaxVehiclesAge: 0,
          ContractID: '',
          ContractDate: 0,
          BoardingOrder: 0,
          TrafficType: 0,
          ScopeType: 3,
          MunicipalType: 0,
          Notes: '',
          Equipment: null,
          DoNotTransfer: false,
          DoNotAssign: false,
          PublicAlias: '',
          ImportInfo: {
            IsImported: true,
            Datasource: 'T-One',
            UUID: 'a647f2f8-632d-11ee-a3cc-02c75427dd6f',
            IntID: 327,
            TextID: '8145c764-632d-11ee-997d-02c7542039f8',
            CreatedAt: '2023-10-05T08:17:00+05:00',
            UpdatedAt: '2000-03-22T17:03:11+05:00',
            Status: ''
          }
        }
      }
    ],
    stops: [],
    error: null,
    loading: false
  },
  getters: {
    getRoutes: (state) => state.routes,
    getError: (state) => state.error,
    getLoading: (state) => state.loading,
    getStops: (state) => state.stops
  },
  mutations: {
    SET_ROUTES(state, data) {
      state.routes = data
    },
    SET_ERROR(state, data) {
      state.error = data
    },
    SET_LOADING(state, value) {
      state.loading = value
    },
    SET_STOPS(state, value) {
      const stops = []
      value.forEach((route) => {
        stops.push(...route.Stops)
      })
      state.stops = stops
    }
  },
  actions: {
    async getRoutesData({ commit }) {
      try {
        commit('SET_LOADING', true)
        const data = await axios.get(
          'https://220.transflow.ru/api/public/v1/routes_data?key=012345678abc'
        )
        commit('SET_ROUTES', data)
        commit('SET_STOPS', data)
      } catch (e) {
        commit('SET_ERROR', e)
        console.error(e)
      } finally {
        commit('SET_LOADING', false)
      }
    }
  },
  modules: {}
})
