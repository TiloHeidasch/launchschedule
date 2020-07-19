import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Map, tileLayer, marker } from 'leaflet';
import * as L from 'leaflet';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  @Input('lat') lat: number;
  @Input('lng') lng: number;
  map;
  marker;
  constructor() { }

  ngAfterViewInit(): void {
    this.map = new Map('map').setView([this.lat, this.lng], 3);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
      }
    ).addTo(this.map);
    this.marker = marker([this.lat, this.lng]).addTo(this.map);

    setTimeout(() => {
      this.map.invalidateSize()
    }, 100);
    setTimeout(() => {
      this.map.invalidateSize()
    }, 1000);
  }
  ngOnInit() { }

}
