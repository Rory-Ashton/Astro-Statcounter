import sys
import time
import subprocess
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import os

if len(sys.argv) != 2:
    print("Usage: python lint_watch.py <path/to/file>")
    sys.exit(1)

TARGET_FILE = os.path.abspath(sys.argv[1])
TARGET_DIR = os.path.dirname(TARGET_FILE)

class Handler(FileSystemEventHandler):
    def on_modified(self, event):
        if os.path.abspath(event.src_path) == TARGET_FILE:
            print(f"Changed: {event.src_path}")
            subprocess.run(["eslint", TARGET_FILE], check=False)

observer = Observer()
observer.schedule(Handler(), path=TARGET_DIR, recursive=False)
observer.start()

try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    observer.stop()

observer.join()

