import {Injectable} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  private _faceSnaps: FaceSnap[] = [
    {
      id:1,
      title: 'Archibald',
      description: 'Mon meilleur ami',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'a un endroit'
    },
    {
      id:2,
      title: 'Titi',
      description: 'le copain de minet',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 0
    }];


  getAllFaceSnaps(): FaceSnap[] {
    return this._faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this._faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById( faceSnapId : number, snapType: 'snap' | 'unsnap') : void {
    const faceSnap=this.getFaceSnapById(faceSnapId);
    snapType==='snap'?faceSnap.snaps++ : faceSnap.snaps--;
  }
}
