/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bTF6fftT7IS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from ".././components/ui/card";
import { Label } from ".././components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from ".././components/ui/select";
import { Textarea } from ".././components/ui/textarea";
import { Input } from ".././components/ui/input";
import { Button } from ".././components/ui/button";

export default function Component() {
  return (
    <div>
      {" "}
      <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max  border-none gap-4">
        <div className="flex items-center gap-4" />
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8" />
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8" />
        </div>
        <div className="flex items-center justify-center gap-2 md:hidden" />
      </div>
      <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max  gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Request AI Evaluation</CardTitle>
            <CardDescription>
              Fill out the form to request an AI evaluation for your content.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="content-type">Content Type</Label>
                <Select id="content-type">
                  <SelectTrigger>
                    <SelectValue placeholder="Select content type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="audio">Audio</SelectItem>
                    <SelectItem value="text">Text</SelectItem>
                    <SelectItem value="voice">Voice</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="content-description">Content Description</Label>
                <Textarea
                  id="content-description"
                  placeholder="Provide a brief description of your content"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="content-file">Content File</Label>
                <Input type="file" id="content-file" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Enter your email" />
              </div>
              <Button type="submit" className="w-full">
                Submit Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
