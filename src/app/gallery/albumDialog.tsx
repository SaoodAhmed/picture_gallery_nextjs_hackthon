"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Folder } from "lucide-react";
import { useState } from "react";
import { AiFillFolderAdd } from "react-icons/ai";
import { FolderCreate } from "./action";

export function AlbumDialog({ImageData} : {ImageData:string}) {
  const [album, setAlbum] = useState("");
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <AiFillFolderAdd
            size={30}
            className=" text-slate-50 hover:text-red-500 cursor-pointer duration-300"
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription>
            Enter the album name for the picture you want to add in the album.
            Click Add to Album when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="album-name" className="text-right">
              Name
            </Label>
            <Input
              id="album-name"
              value={album}
              onChange={(e:any)=>{setAlbum(e.target.value)}}
              className="col-span-3"
              placeholder="Album Name Here..."
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={async ()=>{setOpen(false); await FolderCreate(album,ImageData)}} type="submit">Add to Album</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
